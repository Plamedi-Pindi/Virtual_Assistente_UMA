// Import components
import Button from "../Button/Button";

// Import icons
import { BsX } from "react-icons/bs";

// Import Motion animation
import * as motion from "motion/react-client";

// Import Navigate 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type StartChatType = {
    isDisplayed: boolean,
    onClick: () => void
}

const StartChat = ({ isDisplayed, onClick }: StartChatType) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAnimated(true);

        setTimeout(() => {
            navigate("/virtualassistent")
        }, 3000);
    }

    const robotAnimate = isAnimated
        ? {
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 30, -30, 0],
            y: [1, 1, -30, -30, 1]
        }
        : {}

    const ellipseAnimation = isAnimated
        ? {
            scale: [1, 1.1, 1.2, 1, 1],
            rotate: [0, 0, 20, -20, 0],
            y: [1, 1, -20, -20, 1]
        }
        : {}

    return (
        <div className={`w-full h-dvh bg-third absolute z-[11] top-0 left-0 flex flex-col justify-end pb-5 ${isDisplayed ? "block" : "hidden"} duration-700`}>
            <div className=" grow relative">
                {/* Close Button */}
                <button
                    onClick={onClick}
                    className="absolute top-4 right-4 z-[100] text-3xl"
                >
                    <BsX />
                </button>

                <img src="/svg/Ellipse4.svg" className="w-28 absolute bottom-0 z-[10] " />
                <img src="/svg/Ellipse3.svg" className="w-24 absolute top-32 right-0 z-[10] " />
                <div className="w-full h-full z-[12] pt-[5rem] relative">
                    <motion.img
                        animate={robotAnimate}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        src="/svg/robote.svg"
                        className="w-64 m-auto   "
                    />

                    <motion.img
                        animate={ellipseAnimation}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        src="/svg/Ellipse2.svg"
                        className="w-64 m-auto "
                    />
                </div>
            </div>
            <div className="">
                <div className="text-center w-[18rem] m-auto mb-12 text-primary">
                    <h1 className="text-xl font-bold tracking-[.1rem] mb-3 ">Olá! Eu sou a <span className="text-secundary">UMA</span></h1>
                    <p className="text-base  font-bold mb-3">A tua assistente virtual inteligente!</p>
                    <p className="text-sm">Vamos conversar e resolver os teus problemas juntos?</p>
                </div>

                <Button onClick={handleClick}>Começar agora</Button>
            </div>
        </div>
    )
}

export default StartChat;