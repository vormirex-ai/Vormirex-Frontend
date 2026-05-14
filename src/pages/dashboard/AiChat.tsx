import { useState } from "react";
import { motion } from "framer-motion";
import { containerStagger, fadeUpItem } from "@/lib/motion";
import { ChatHeader } from "@/components/dashboard/ai-chat/chat-header";
import { ChatMessage } from "@/components/dashboard/ai-chat/chat-message";
import { ChatInput } from "@/components/dashboard/ai-chat/chat-input";

interface Message {
  role: "ai" | "user";
  content: string;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hello! I'm your AI Tutor. 🎓\nI can help you with coding, science, math and more.",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const handleSendMessage = (text: string) => {
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
        content: `You asked: "${text}"\n\nThis is an AI generated response.`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      variants={containerStagger(0.12)}
      initial="hidden"
      animate="show"
    >
      <div className="h-[calc(100vh-80px)] flex flex-col max-w-5xl mx-auto p-4 lg:p-10 overflow-hidden">
        <motion.div variants={fadeUpItem}>
          <div className="shrink-0">
            <ChatHeader />
          </div>
        </motion.div>


        <div className="flex-1 overflow-y-auto py-6 pr-2 custom-scrollbar">
          <motion.div variants={fadeUpItem}>
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={
                  <div className="space-y-2 whitespace-pre-line">
                    {message.content}
                  </div>
                }
              />
            ))}

            {loading && (
              <ChatMessage
                role="ai"
                content={
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                  </div>
                }
              />
            )}
          </motion.div>
        </div>


        <motion.div variants={fadeUpItem}>
          <div className="shrink-0 pt-4">
            <ChatInput onSend={handleSendMessage} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}