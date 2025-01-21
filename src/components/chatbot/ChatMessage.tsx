import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Message } from "../../types/chatbot.types";

interface ChatMessageProps {
  message: Message;
}

export default React.memo(function ChatMessage({ message }: ChatMessageProps) {
  const renderContent = (content: string) => {
    try {
      return (
        <div className="flex flex-col w-full text-left font-inter text-[15px] leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => <h1 className="text-2xl font-bold mb-4 font-display" {...props} />,
              h2: (props) => <h2 className="text-xl font-bold mb-3 font-display" {...props} />,
              h3: (props) => <h3 className="text-lg font-bold mb-2 font-display" {...props} />,
              p: (props) => <p className="mb-2 text-current" {...props} />,
              ul: (props) => <ul className="list-disc ml-6 mb-2 text-current" {...props} />,
              ol: (props) => <ol className="list-decimal ml-6 mb-2 text-current" {...props} />,
              li: (props) => <li className="mb-1 text-current" {...props} />,
              a: (props) => (
                <a 
                  className="text-current hover:opacity-80 hover:underline cursor-pointer transition-all duration-200 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              strong: (props) => <strong className="font-bold text-current" {...props} />,
              em: (props) => <em className="italic text-current" {...props} />,
              code: ({ inline, children, ...props }) => (
                inline 
                  ? <code className="bg-black/10 px-1.5 py-0.5 rounded text-current font-mono text-sm" {...props}>{children}</code>
                  : <code className="block bg-black/10 p-3 rounded-lg my-2 whitespace-pre-wrap text-current font-mono text-sm" {...props}>{children}</code>
              ),
              blockquote: (props) => (
                <blockquote className="border-l-4 border-current/30 pl-4 my-2 italic opacity-90" {...props} />
              ),
            }}
          >
            {content || ''}
          </ReactMarkdown>
        </div>
      );
    } catch (error) {
      console.error('Error rendering markdown:', error);
      return <div className="text-red-500">Error rendering message content</div>;
    }
  };

  return (
    <div
      role="listitem"
      aria-label={`${message.role} message`}
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[90%] rounded-lg px-4 py-3 shadow-sm ${
          message.role === "user"
            ? "bg-gradient-to-r from-primary to-primary-light text-white whitespace-pre-wrap break-words"
            : "bg-white/80 text-text-primary border border-primary/10"
        }`}
      >
        {renderContent(message.content)}
      </div>
    </div>
  );
});