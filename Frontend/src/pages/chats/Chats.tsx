// Import components
import HeaderSection from "../../components/Header/Header";
import ChatInputs from "../../components/Inputs/ChatInputs";



const Chatpage = () => {

    const handleSendMessage = (msg: string) => {
        console.log("Mensagem enviada: ", msg);
        
    }

    return (
        <div className="h-screen w-full bg-gradient-to-t from-[#999999] to-[#FFFFFF] ">
            {/* Header */}
            <HeaderSection />

            {/* Input */}
            <ChatInputs onSend={handleSendMessage} />
        </div>
    )
}

export default Chatpage