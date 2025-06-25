// Import components
import HeaderSection from "../../components/Header/Header";
import ChatInputs from "../../components/Inputs/ChatInputs";
import { ChatBox1, ChatBox2 } from "../../components/Chats/Chats";



const Chatpage = () => {

    const handleSendMessage = (msg: string) => {
        console.log("Mensagem enviada: ", msg);

    }

    return (
        <div className="h-screen w-full overflow-y-hidden bg-gradient-to-t from-[#999999] to-[#FFFFFF] flex flex-col  ">
            {/* Header */}
            <HeaderSection />

            <section className=" w-full grow pl-6 pr-6 flex flex-col-reverse items-end pb-[8rem] gap-6 relative overflow-auto">
                <ChatBox1
                    text="Testamos os seus componentes"
                    position="absolute right-0"
                    dimension="max-w-56 "
                />
                <ChatBox2
                    text="Testamos os seus componentes"
                    position=""
                    dimension="mr-auto max-w-56"
                />
                <ChatBox1
                    text="Espero que este teste do qual ti referes seja uma coisa muito profissional. Pois ja nao estamos mais na altura de ser um amador."
                    position=""
                    dimension="max-w-56"
                />
                <ChatBox2
                    text="Testamos os seus componentes"
                    position=""
                    dimension="mr-auto max-w-56"
                />
                <ChatBox1
                    text="Testamos os seus componentes"
                    position=""
                    dimension="max-w-56"
                />
            </section>

            {/* Input */}
            <ChatInputs onSend={handleSendMessage} />
        </div>
    )
}

export default Chatpage