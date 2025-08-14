import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import ChatMessage from "./ChatMessage";
import InputArea from "./InputArea";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  subject: string;
}

const ChatWindow = ({ subject }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Приветственное сообщение при загрузке
  useEffect(() => {
    const welcomeMessages = {
      writing: "Привет! Я ваш ИИ-ассистент по письму. Я помогу вам улучшить навыки письма, грамматику, стиль и структуру текстов. Задавайте любые вопросы!",
      speaking: "Привет! Я ваш ИИ-ассистент по разговорной речи. Я помогу вам развить навыки общения, произношение и уверенность в разговоре. Готов помочь!",
      math: "Привет! Я ваш ИИ-ассистент по математике. Я помогу вам решать задачи, объясню формулы и концепции. Задавайте вопросы по любой теме математики!"
    };

    const welcomeMessage: Message = {
      id: "welcome",
      text: welcomeMessages[subject as keyof typeof welcomeMessages] || "Привет! Я ваш ИИ-ассистент. Чем могу помочь?",
      isUser: false,
      timestamp: new Date().toISOString(),
    };

    setMessages([welcomeMessage]);
  }, [subject]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Улучшенные ответы ИИ в зависимости от предмета
    setTimeout(() => {
      let aiResponse = "";
      
      if (subject === "writing") {
        if (inputValue.toLowerCase().includes("грамматик")) {
          aiResponse = "Отличный вопрос о грамматике! Вот основные правила, которые помогут вам:\n\n1. **Подлежащее и сказуемое** должны согласовываться в числе и лице\n2. **Знаки препинания** важны для понимания смысла\n3. **Порядок слов** влияет на стиль и ясность\n\nХотите разобрать конкретное правило или у вас есть текст для проверки?";
        } else if (inputValue.toLowerCase().includes("стиль")) {
          aiResponse = "Стиль письма - это ваш уникальный голос! Вот несколько советов:\n\n• Используйте активный залог вместо пассивного\n• Избегайте канцеляризмов и сложных конструкций\n• Пишите короткими предложениями для ясности\n• Используйте конкретные примеры\n\nКакой стиль вы хотите развить: академический, творческий или деловой?";
        } else {
          aiResponse = "Отличный вопрос по письму! Я помогу вам улучшить навыки письма. Можете рассказать подробнее, что именно вас интересует: грамматика, стиль, структура текста или что-то другое?";
        }
      } else if (subject === "speaking") {
        if (inputValue.toLowerCase().includes("произношен")) {
          aiResponse = "Произношение - ключ к пониманию! Вот несколько техник:\n\n🎯 **Слушайте и повторяйте** - имитируйте носителей языка\n🎯 **Записывайте себя** - анализируйте свои ошибки\n🎯 **Практикуйте скороговорки** - улучшают артикуляцию\n🎯 **Используйте зеркало** - следите за положением губ\n\nНа каком языке вы хотите улучшить произношение?";
        } else if (inputValue.toLowerCase().includes("уверен")) {
          aiResponse = "Уверенность в разговоре приходит с практикой! Попробуйте:\n\n💪 **Говорите медленно** - не торопитесь\n💪 **Используйте паузы** - они помогают собраться с мыслями\n💪 **Практикуйтесь перед зеркалом** - привыкайте к себе\n💪 **Начните с простых тем** - постепенно усложняйте\n\nВ каких ситуациях вы чувствуете неуверенность?";
        } else {
          aiResponse = "Отличный вопрос по разговорной речи! Я помогу вам развить навыки общения. Что именно вас интересует: произношение, уверенность в разговоре, или что-то другое?";
        }
      } else if (subject === "math") {
        if (inputValue.toLowerCase().includes("алгебр")) {
          aiResponse = "Алгебра - это язык математики! Вот основные концепции:\n\n📐 **Уравнения** - равенства с неизвестными\n📐 **Функции** - зависимости между переменными\n📐 **Системы уравнений** - несколько уравнений одновременно\n📐 **Квадратные уравнения** - уравнения второй степени\n\nС какой темы хотите начать?";
        } else if (inputValue.toLowerCase().includes("геометр")) {
          aiResponse = "Геометрия - это изучение форм и пространства! Основные разделы:\n\n🔷 **Планиметрия** - фигуры на плоскости\n🔷 **Стереометрия** - объемные фигуры\n🔷 **Тригонометрия** - углы и их функции\n🔷 **Аналитическая геометрия** - координаты и уравнения\n\nКакая область геометрии вас интересует?";
        } else {
          aiResponse = "Отличный вопрос по математике! Я помогу вам разобраться с любыми математическими концепциями. Что именно вас интересует: алгебра, геометрия, тригонометрия или что-то другое?";
        }
      } else {
        aiResponse = `Отличный вопрос по ${subject}! Я помогу вам разобраться с этой темой. Можете предоставить больше деталей для более точного ответа?`;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Заголовок чата */}
      <div className="bg-muted p-4 border-b border-border">
        <h3 className="font-semibold text-foreground capitalize">{subject}</h3>
        <p className="text-sm text-muted-foreground">
          Задавайте вопросы и получайте персонализированную помощь
        </p>
      </div>

      {/* Область сообщений */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {/* Примеры вопросов */}
        {messages.length === 1 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground text-center">Попробуйте задать один из этих вопросов:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {subject === "writing" && (
                <>
                  <button
                    onClick={() => setInputValue("Как улучшить грамматику?")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Как улучшить грамматику?
                  </button>
                  <button
                    onClick={() => setInputValue("Как развить стиль письма?")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Как развить стиль письма?
                  </button>
                </>
              )}
              {subject === "speaking" && (
                <>
                  <button
                    onClick={() => setInputValue("Как улучшить произношение?")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Как улучшить произношение?
                  </button>
                  <button
                    onClick={() => setInputValue("Как стать увереннее в разговоре?")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Как стать увереннее в разговоре?
                  </button>
                </>
              )}
              {subject === "math" && (
                <>
                  <button
                    onClick={() => setInputValue("Расскажи об основах алгебры")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Расскажи об основах алгебры
                  </button>
                  <button
                    onClick={() => setInputValue("Что изучает геометрия?")}
                    className="text-left p-3 bg-accent rounded-lg hover:bg-accent/80 transition-colors text-sm"
                  >
                    Что изучает геометрия?
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-message chat-ai">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Форма ввода */}
      <InputArea
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        disabled={isLoading}
        placeholder={`Введите ваш вопрос по ${subject}...`}
      />
    </div>
  );
};

export default ChatWindow;