import { useState, useRef, useEffect } from "react";
import { Bot, X, RefreshCw } from "lucide-react";
import {
  sendMessage,
  initializeNewConversation,
} from "../../api/endpoints/chat.api";
import { Message } from "../../types/chatbot.types";
import ChatMessage from "./ChatMessage.tsx";
import ChatInput from "./ChatInput.tsx";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there 👋, feel free to ask questions about me!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessage(message);
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Có lỗi xảy ra";
      const errorResponseMessage: Message = {
        role: "assistant",
        content: `⚠️ ${errorMessage}`,
      };
      setMessages(prev => [...prev, errorResponseMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewConversation = () => {
    initializeNewConversation();
    setMessages([
      {
        role: "assistant",
        content:
          "Hi there 👋, feel free to ask questions about me!",
      },
    ]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isOpen ? 'w-[480px]' : 'w-auto'}`}>
      {isOpen && (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl flex flex-col h-[600px] border border-primary/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white font-inter">
              <Bot size={20} />
              <div className="flex flex-col">
                <span className="font-semibold text-base">Phi-losopher</span>
                <span className="text-sm text-white/80">Administrative Support Assistant</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleNewConversation}
                className="text-white hover:text-gray-200 transition-colors p-1"
                title="New Conversation"
              >
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 bg-gradient-to-b from-background-light to-secondary/10">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="animate-spin h-4 w-4 border-3 border-primary border-t-transparent rounded-full"></div>
                <span className="text-text-secondary text-xs">Đang suy nghĩ...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="py-2 px-3 border-t border-primary/10 bg-white/50">
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              ref={inputRef}
            />
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-primary to-primary-light text-white p-2.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Bot size={20} />
        </button>
      )}
    </div>
  );
}