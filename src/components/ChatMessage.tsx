interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  // Простая функция для форматирования текста
  const formatMessage = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Обработка заголовков
        if (line.startsWith('**') && line.endsWith('**')) {
          return <strong key={index} className="font-semibold">{line.slice(2, -2)}</strong>;
        }
        // Обработка списков
        if (line.startsWith('• ')) {
          return <li key={index} className="ml-4">{line.slice(2)}</li>;
        }
        if (line.startsWith('1. ')) {
          return <li key={index} className="ml-4">{line.slice(3)}</li>;
        }
        // Обработка эмодзи и специальных символов
        if (line.includes('🎯') || line.includes('💪') || line.includes('📐') || line.includes('🔷')) {
          return <span key={index}>{line}</span>;
        }
        // Обычный текст
        return <span key={index}>{line}</span>;
      });
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`chat-message ${isUser ? "chat-user" : "chat-ai"}`}>
        <div className="text-sm leading-relaxed space-y-1">
          {formatMessage(message)}
        </div>
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