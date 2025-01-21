import axiosInstance from '../config/axios.config';
import { Message, ChatResponse } from '../../types/chatbot.types';

const CHAT_ENDPOINTS = {
  SEND_MESSAGE: '/chat/message',
  NEW_CONVERSATION: '/chat/new',
} as const;

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const response = await axiosInstance.post<ChatResponse>(
      CHAT_ENDPOINTS.SEND_MESSAGE,
      { message }
    );
    return response.data.message;
  } catch (error) {
    throw new Error('Cannot send the messages. Please try again later.');
  }
};

export const initializeNewConversation = async (): Promise<void> => {
  try {
    await axiosInstance.post(CHAT_ENDPOINTS.NEW_CONVERSATION);
  } catch (error) {
    throw new Error('Unable to create new conversation.');
  }
};

export type { Message };