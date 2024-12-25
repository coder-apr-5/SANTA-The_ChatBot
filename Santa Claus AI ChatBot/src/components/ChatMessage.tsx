import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isSanta = message.role === 'santa';
  
  return (
    <div className={`flex ${isSanta ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex items-start max-w-[80%] ${isSanta ? 'flex-row' : 'flex-row-reverse'}`}>
        {isSanta && (
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-2">
            <span className="text-white text-lg">🎅</span>
          </div>
        )}
        <div
          className={`px-4 py-2 rounded-lg ${
            isSanta
              ? 'bg-red-600 text-white rounded-tl-none'
              : 'bg-green-600 text-white rounded-tr-none'
          }`}
        >
          <p>{message.content}</p>
          <span className="text-xs opacity-75 mt-1 block">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};