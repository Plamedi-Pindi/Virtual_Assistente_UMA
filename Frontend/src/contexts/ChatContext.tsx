import  { createContext, useContext, useState, ReactNode } from "react";

interface ChatMessage {
    message: string,
    sender: 'user' | 'bot',
    id: string
}

interface ChatProviderProps {
    children: ReactNode
}

interface CreateContextType {
    chatMessages: ChatMessage[],
    addChatMessage: (text: string, sender: 'user' | 'bot') => void
}

const ChatContext = createContext<CreateContextType>({} as CreateContextType);

export default function ChatProvider({ children }: ChatProviderProps) {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

    const addChatMessage = (text: string, sender: 'user' | 'bot') => {
        const newMassage: ChatMessage = {
            message: text,
            sender: sender,
            id: `${sender}_${Date.now()}`
        }
        setChatMessages(prev => [...prev, newMassage]);
    }
    return (
        <div>
            <ChatContext.Provider value={{ chatMessages, addChatMessage }}>
                {children}
            </ChatContext.Provider>
        </div>
    );
}


export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
 