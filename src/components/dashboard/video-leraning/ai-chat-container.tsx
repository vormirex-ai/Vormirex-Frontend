import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ChatLoading } from "@/components/common/ai-chat/chat-loading";
import { ChatInput } from "@/components/common/ai-chat/chat-input";
import { ChatMessage } from "@/components/common/ai-chat/chat-message";
import { Message } from "@/interface/chatMsg.interface";

import {
  getAiTutorChats,
  sendAiTutorMessage,
} from "@/services/ai-tutor";

export function AIChatSidebar({ id }: { id?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      if (!id) return;

      try {
        setLoading(true);

        const response = await getAiTutorChats(id);

        console.log("AI Chats:", response);

        const chats = response?.data?.messages || [];

        if (chats.length > 0) {
          const formatted: Message[] = chats.map((msg: any) => ({
            role: msg.role === "model" ? "ai" : "user",
            content: msg.content,
          }));

          setMessages(formatted);
        } else {
          setMessages([
            {
              role: "ai",
              content:
                "👋 Hi! I'm watching this lesson with you. Ask me anything...",
            },
          ]);
        }
      } catch (error) {
        console.error("Chat fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [id]);


  const handleSend = async (text: string) => {
    if (!text.trim() || !id) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);
      const response = await sendAiTutorMessage(id, {
        message: text,
      });

      const messages = response?.data?.messages || [];

      const lastAiMessage = [...messages]
        .reverse()
        .find((msg: any) => msg.role === "model");

      const aiMessage: Message = {
        role: "ai",
        content:
          lastAiMessage?.content || "No response from AI",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Send message error:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleClear = () => {
    setMessages([
      {
        role: "ai",
        content:
          "👋 Hi! I'm watching this lesson with you. Ask me anything...",
      },
    ]);
  };


  return (
    <div className="w-full lg:w-[400px] h-[85vh] custom-surface rounded-xl flex flex-col shadow-xl">

      <div className="p-4 border-b border-cyan-500/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-gradient p-2 rounded-lg">
            <img src={logo} className="w-4 h-4" />
          </div>

          <div>
            <h3 className="text-sm font-bold">
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
          onClick={handleClear}
        >
          <Trash2 size={18} />
        </Button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
          />
        ))}

        {loading && <ChatLoading />}
      </div>

      <div className="p-4 border-t border-slate-800">
        <ChatInput
          onSend={handleSend}
          placeholder="Ask about this topic..."
        />
      </div>
    </div>
  );
}