import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ChatComponent from 'components/Chat';
import Loader from 'components/Loader';

import { useChatHelpers } from './useChatHelpers';
import { fetchMyRequests } from 'store/actions/rentRequests';

import RootState from 'types/store';

type TChatProps = {
  setIsFooterVisible: (value: boolean) => void,
};

const Chat: React.FC<TChatProps> = ({ setIsFooterVisible }) => {
  const [page, setPage] = useState(0);
  const { user } = useSelector((state: RootState) => state.user);
  
  const { id, setChatId, chats, getChatInfo, messages, postMessage, isLoading, messagesCount } = useChatHelpers(page);
  
  const dispatch = useDispatch();
  
  const setNextPage = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);
  
  useEffect(() => {
    setIsFooterVisible(false);
    dispatch(fetchMyRequests(user?.role === 'pilot' ? 'outbox' : 'inbox'));
    return () => {
      setIsFooterVisible(true);
    };
    // eslint-disable-next-line
  }, []);
  
  if (isLoading) {
    return <Loader/>;
  }
  
  return (
    <ChatComponent
      chatId={id}
      setChatId={setChatId}
      chats={chats}
      getChatInfo={getChatInfo}
      messages={messages}
      postMessage={postMessage}
      setNextPage={setNextPage}
      messagesCount={messagesCount}
    />
);
};

export default memo(Chat);
