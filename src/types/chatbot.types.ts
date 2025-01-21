export interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export interface ChatResponse {
  message: string;
}