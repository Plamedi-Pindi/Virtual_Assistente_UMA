// Import TextareaAutosize 
import TextareaAutosize from "react-textarea-autosize"

// Import Hooks
import { useState } from "react"

// import images
import sendIcon from "../../assets/img/send.png";

const ChatInputs = ({ onSend }: { onSend: (message: string) => void }) => {
    const [message, setMessage] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (message.trim()) {
                onSend(message.trim());
                setMessage("");
            }

        }
    };

    const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (message.trim()) {
            onSend(message.trim());
            setMessage("");
        }
    }

    return (
        <div className="w-full p-6 absolute bottom-3">
            <div className="bg-third min-h-10 rounded-[23px] p-3 drop-shadow-2xl flex items-center gap-2">
                <TextareaAutosize
                    minRows={1}
                    maxRows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Pergunte qualquer coisa..."
                    className="grow  resize-none focus:outline-none rounded-[23px] bg-transparent pl-1 pr-1 p-2 "
                />

                <button
                    onClick={handleSendMessage}
                    className="bg-primary rounded-full w-10 h-10 flex items-center justify-center"
                >
                    <img src={sendIcon} alt="Botão de envio" className="w-7 object-cover" />
                </button>

            </div>
        </div>
    )
}

export default ChatInputs