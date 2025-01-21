import { forwardRef, useState, KeyboardEvent, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ onSendMessage, isLoading }, ref) => {
    const [message, setMessage] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = (e?: React.FormEvent) => {
      e?.preventDefault();
      if (message.trim() && !isLoading) {
        onSendMessage(message);
        setMessage('');
      }
    };

    // Auto-resize the textarea based on content
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [message]);

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    return (
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-2">
          <textarea
            ref={(el) => {
              textareaRef.current = el;
              if (typeof ref === "function") ref(el);
              else if (ref) ref.current = el;
            }}
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nhập tin nhắn..."
            className="flex-1 p-3 border border-primary/20 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-primary/30 
              bg-white/80 placeholder:text-text-secondary/50 
              text-text-primary font-inter text-[15px]
              disabled:bg-gray-50 disabled:cursor-not-allowed
              transition-all duration-200"
            disabled={isLoading}
            rows={1}
            style={{ resize: "none", overflow: "hidden" }}
          />
          <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="p-3 bg-gradient-to-r from-primary to-primary-light 
              text-white rounded-lg hover:opacity-90 
              disabled:opacity-50 disabled:cursor-not-allowed 
              transition-all duration-200 shadow-sm hover:shadow-md"
            title="Gửi tin nhắn"
          >
            <Send size={20} className="transform rotate-45" />
          </button>
        </div>
      </form>
    );
  }
);

ChatInput.displayName = 'ChatInput';

export default ChatInput;