import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import io from "socket.io-client";

import { IChatMessage, IChatType } from "components/Chat/types";

import config from "config";
import { getToken } from "utils/token";
import history from "utils/history";
import chatApi from "services/chat/chatApi";
import chatApiService from "services/chat/chatApi";
import useWindowSize from "utils/customHooks/useWindowSize";

import RootState from "types/store";

interface ISocketMessage {
  message: IChatMessage;
}

type ParamsType = {
  id?: string;
};

export const useChatHelpers = (page: number = 0, limit: number = 100) => {
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [chats, setChats] = useState<IChatType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [messagesCount, setmessagesCount] = useState(0);

  const { requests } = useSelector((state: RootState) => state.rentRequests);

  const { id } = useParams<ParamsType>();
  const { width } = useWindowSize();

  const socketIo = useRef(
    io(config.chat_url, {
      extraHeaders: {
        authorization: `Bearer ${getToken("access_token")}`,
      },
    })
  );
  const prevChatId = useRef("");

  const setChatId = useCallback(
    (chatId: string) => {
      if (chatId === id) return;
      history.replace(`/dashboard/chat/${chatId}`);
    },
    [id]
  );

  const currentRequestId = useMemo(() => {
    const currentChat = chats.find((chat) => chat._id === id);
    return currentChat?.requestId;
  }, [id, chats]);

  const getChatInfo = useCallback(
    (chatId: string) => {
      const currentChat = chats.find((chat) => chat._id === chatId);
      const currentRequest = requests.find(
        (request) => request.id === currentChat?.requestId
      );
      const isRequest = currentChat?.type !== "random";
      if (!currentChat) return;

      return {
        avatar: currentChat.opponent.avatar,
        userName:
          currentChat.opponent.company_name ||
          `${currentChat.opponent.first_name} ${currentChat.opponent.last_name}`,
        startDate: new Date(
          isRequest && currentRequest
            ? currentRequest.from_datetime
            : currentChat!.createdAt
        ),
        isRequest,
        request: {
          id: currentChat.requestId,
          flightFrom: `${currentRequest?.initial_airport.city.name}, ${currentRequest?.initial_airport.code}`,
          flightTo: `${currentRequest?.final_airport.city.name}, ${currentRequest?.final_airport.code}`,
          jet: {
            id: currentRequest?.jet.id,
            name: currentRequest?.jet.model.name,
            country: currentRequest?.jet.country.name,
            city: currentRequest?.jet.city.name,
          },
        },
      };
    },
    [chats, requests]
  );

  const fetchChatList = useCallback(async () => {
    setIsLoading(true);
    try {
      // mark message from current chat room as read
      if (id) {
        socketIo.current.emit("mark room as read", { roomId: id });
      }
      const result = await chatApiService.getLatestChats();
      setChats(result.data.conversation);
      if (!id && width > 769) {
        if (result.data.conversation[0]?._id) {
          setChatId(result.data.conversation[0]._id);
        }
      }
    } catch (err) {
      setChats([]);
    }
    setIsLoading(false);
  }, [id, setChatId, width]);

  const fetchChatMessages = useCallback(async () => {
    if (id) {
      setIsLoading(true);
      try {
        const result = await chatApi.getChatMessages(id, { page, limit });
        if (page === 0) {
          setMessages(result.data.conversation.reverse());
        } else {
          setMessages((prev) => [
            ...prev,
            ...result.data.conversation.reverse(),
          ]);
        }
        setmessagesCount(result.data.totalCount);
      } catch (err) {
        setMessages([]);
      }
      setIsLoading(false);
    }
  }, [id, limit, page]);

  const postMessage = useCallback((roomId, messageText) => {
    socketIo.current.emit("post message", { roomId, messageText });
  }, []);

  useEffect(() => {
    const socket = socketIo.current;
    socket.on("new message", (newMessage: ISocketMessage) => {
      setMessages((prevMess) => [newMessage.message, ...prevMess]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchChatList();
    fetchChatMessages();

    if (id && prevChatId.current !== id) {
      if (prevChatId.current) {
        socketIo.current.emit("unsubscribe", prevChatId.current);
      }
      socketIo.current.emit("subscribe", id);
      prevChatId.current = id;
    }
  }, [id, fetchChatMessages, fetchChatList]);

  return {
    id,
    setChatId,
    currentRequestId,
    getChatInfo,
    messages,
    chats,
    postMessage,
    isLoading,
    messagesCount,
  };
};
