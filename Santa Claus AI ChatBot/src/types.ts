export interface Message {
  id: string;
  content: string;
  role: 'user' | 'santa';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}