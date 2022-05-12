import axios from 'axios';

import { getToken } from 'utils/token';
import config from 'config';

const chatApi = axios.create({
  baseURL: config.chat_url,
});

chatApi.interceptors.request.use( (apiConfig) => {
  const token = getToken('access_token');
  apiConfig.headers.Authorization =  token ? `Bearer ${token}` : '';
  return apiConfig;
});

interface IParamsGetChats {
  page: number;
  limit: number;
}

interface IBodyChatInit {
  user_ids: number[];
  type: 'random';
  request_id: number | null;
}

const chatApiService = {
  // get
  getLatestChats: async () => await chatApi.get('room'),
  getChatMessages: async (id: string, params: IParamsGetChats) => await chatApi.get(`room/${id}`, {params}),
  // post
  initiateChat: async (body: IBodyChatInit) => await chatApi.post('room/', body),
  postMessage: async (id: string, messageText: string) => await chatApi.post(`room/${id}/message`, {messageText}),
  // put
  markRoomAsRead: async (id: string) => await chatApi.put(`/room/${id}/mark-read`)
};

export default chatApiService;