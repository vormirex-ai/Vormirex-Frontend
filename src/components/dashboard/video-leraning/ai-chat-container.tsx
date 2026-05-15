import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ChatLoading } from "@/components/common/ai-chat/chat-loading";
import { ChatInput } from "@/components/common/ai-chat/chat-input";
import { ChatMessage } from "@/components/common/ai-chat/chat-message";
import { Message } from "@/interface/chatMsg.interface";


export function AIChatSidebar() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "👋 Hi! I'm watching this lesson with you. Ask me anything...",
    },
  ]);
  const [loading, setLoading] = useState(false);


  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        role: "ai",
        content: `AI Response for: ${text}`,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full lg:w-[400px] h-[85vh] border border-cyan-500/10 bg-card rounded-xl flex flex-col shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/5">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-gradient p-2 rounded-lg text-white">
            <img src={logo} className="w-4 h-4" alt="logo" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">
              AI Tutor Assistant
            </h3>

            <span className="text-[10px] text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Online
            </span>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-slate-500"
        >
          <Trash2 size={18} />
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}

        {loading && <ChatLoading />}
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-900/30">
        <ChatInput
          onSend={handleSend}
          placeholder="Ask about this topic..."
          inputClassName="h-11 rounded-xl"
        />
      </div>
    </div>
  );
}