// Import components
import HeaderSection from "../../components/Header/Header";
import ChatInputs from "../../components/Inputs/ChatInputs";
import { ChatBox1, ChatBox2 } from "../../components/Chats/Chats";

// Import API
import { sendMessageToRasa } from "../../apis/RasaService";

// Import react markdown
import ReactMarkdown from "react-markdown";

// import hooks
import { useState } from "react";


// Tipagem
type MessageType = {
    from: string,
    message: string
} 

// Main Component
const Chatpage = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const msgReversed = [...messages].reverse();

    // useEffect(() => {
    //     getChatHistory('user123').then(setMessages)
    // }, []);

    // Event to send a message
    const handleSendMessage = async (msg: string) => {
        if (!msg.trim()) return;

        const userMsg = {
            from: "user",
            message: msg
        };

        setMessages((prev) => [...prev, userMsg]);

        // 
        try {
            const botResponses = await sendMessageToRasa("user", msg)

            botResponses.forEach((resp: any) => {
                if (resp.text) {
                    setMessages((prev) => [...prev, { from: "bot", message: resp.text }])
                } else if (resp.custom) {

                    const msgCustom = resp.custom.message

                    setMessages((prev) => [
                        ...prev,
                        { from: "bot", message: msgCustom }
                    ]);
                }
            });
        } catch (error) {
            setMessages((prev) => [...prev, { from: "bot", message: "Erro ao se comunicar com o bot." }]);
        }
    }

    return (
        <div className="h-dvh w-full overflow-y-hidden bg-gradient-to-t from-[#999999] to-[#FFFFFF] flex flex-col  ">
            {/* Header */}
            <HeaderSection />

            <section className=" w-full grow pl-6 pr-6 flex flex-col-reverse items-end pb-[8rem] gap-6 relative overflow-auto scroll-smooth">
                {msgReversed.map((msg, idx) => msg.from === "user" ? (
                    <ChatBox1
                        key={idx}
                        position="absolute right-0"
                        dimension="max-w-56 "
                    >
                        {msg.message}
                    </ChatBox1>
                ) : (

                    <ChatBox2
                        key={idx}
                        position=""
                        dimension="mr-auto max-w-72"
                    >
                        <ReactMarkdown
                            components={{
                                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                ul: ({ children }) => <ul className="list-disc pl-5 text-sm">{children}</ul>,
                                p: ({ children }) => <p className="mb-2 mt-2">{children}</p>,
                                a: ({ children, href }) => (
                                    <a
                                        href={href}
                                        className="text-blue-700"
                                    >
                                        {children}
                                    </a>
                                ),
                                h1: ({ children }) => <h1 className="font-bold mb-2">{children}</h1>,
                                h2: ({ children }) => <h1 className="font-semibold mb-1 mt-2">{children}</h1>,
                            }}
                        >
                            {msg.message}
                        </ReactMarkdown>
                    </ChatBox2>
                )
                )}

            </section>

            {/* Input */}
            <ChatInputs onSend={handleSendMessage} />
        </div>
    )
}

export default Chatpage