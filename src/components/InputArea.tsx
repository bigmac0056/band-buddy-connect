import { Send } from "lucide-react";

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
  placeholder?: string;
}

const InputArea = ({ value, onChange, onSubmit, disabled, placeholder }: InputAreaProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSubmit(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) {
        onSubmit(e as unknown as React.FormEvent);
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    
    // Автоматическое изменение размера
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 128) + 'px';
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border">
      <div className="flex gap-2">
        <textarea
          value={value}
          onChange={handleTextareaChange}
          placeholder={placeholder}
          className="flex-1 min-h-[48px] max-h-32 p-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          rows={1}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className={`w-12 p-0 flex items-center justify-center min-h-[48px] transition-all duration-200 ${
            value.trim() && !disabled
              ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          } rounded-lg`}
        >
          <Send size={18} />
        </button>
      </div>
      <div className="text-xs text-muted-foreground mt-2 text-center">
        Нажмите Enter для отправки, Shift+Enter для новой строки
      </div>
    </form>
  );
};

export default InputArea; 