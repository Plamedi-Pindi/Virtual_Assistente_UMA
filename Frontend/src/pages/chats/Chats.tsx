// Import components
import HeaderSection from "../../components/Header/Header";
import ChatInputs from "../../components/Inputs/ChatInputs";
import { ChatBox1, ChatBox2 } from "../../components/Chats/Chats";

// import hooks
import { useState } from "react";

type MessageType = {
    from: string,
    message: string
}

const Chatpage = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const msgReversed = [...messages].reverse();

    // Event to send a message
    const handleSendMessage = (msg: string) => {
        if(!msg.trim()) return ;

        const userMsg = {
            from: "user",
            message: msg
        };

        setMessages((prev) => [...prev, userMsg]);
    }

    return (
        <div className="h-screen w-full overflow-y-hidden bg-gradient-to-t from-[#999999] to-[#FFFFFF] flex flex-col  ">
            {/* Header */}
            <HeaderSection />

            <section className=" w-full grow pl-6 pr-6 flex flex-col-reverse items-end pb-[8rem] gap-6 relative overflow-auto">
                {msgReversed.map((msg, idx)=> msg.from === "user" ? (
                    <ChatBox1
                        key={idx}
                        text={msg.message}
                        position="absolute right-0"
                        dimension="max-w-56 "
                    />
                ) : (

                    <ChatBox2
                        key={idx}
                        text={msg.message}
                        position=""
                        dimension="mr-auto max-w-56"
                    />
                )
            )}
               
            </section>

            {/* Input */}
            <ChatInputs onSend={handleSendMessage} />
        </div>
    )
}

export default Chatpage