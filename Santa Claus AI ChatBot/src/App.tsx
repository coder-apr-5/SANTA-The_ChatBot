import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateSantaResponse } from './utils/santaResponses';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Ho ho ho! Merry Christmas! I'm Santa Claus! What would you like to talk about?",
      role: 'santa',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate Santa typing
    setIsTyping(true);
    setTimeout(() => {
      const santaResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateSantaResponse(content),
        role: 'santa',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, santaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-xl p-4 min-h-[80vh] flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-red-600">Chat with Santa 🎅</h1>
            <p className="text-gray-600">Share your Christmas wishes!</p>
          </div>
          
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-center text-gray-500 ml-12">
                <span className="animate-pulse">Santa is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
}

export default App;