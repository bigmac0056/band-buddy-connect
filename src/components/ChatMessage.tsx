interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`chat-message ${isUser ? "chat-user" : "chat-ai"}`}>
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className="text-xs opacity-70 mt-2">
            {new Date(timestamp).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;