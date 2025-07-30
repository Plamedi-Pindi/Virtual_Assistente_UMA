
// Import components
import "./onBoarding.css"
import Button from "../Button/Button"

// Import Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Import Images
import img_boarding1 from "../../assets/img/onBoarding/1.png";
import img_boarding2 from "../../assets/img/onBoarding/444.png";
import img_boarding3 from "../../assets/img/onBoarding/333.png";


// Import Motion for animatio
import { motion, AnimatePresence } from "motion/react";

const onBoardingData = [
    {
        title: "Bem-vindo ao app da Metodista",
        descriptio: "Formamos líderes com valores, conhecimento e visão de futuro.",
    },
    {
        title: "Inovação e Tecnologia",
        descriptio: "Notas, horários e muito mais num só lugar. Tudo num toque, onde estiveres.",
    },
    {
        title: "Tudo na Palma da Tua Mão",
        descriptio: "Explora a tua vida académica com mais autonomia, clareza e apoio",
    }
]

// Define default components
const OnBoarding = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const current = onBoardingData[step];

    const nextStep = () => {
        if (step < onBoardingData.length - 1) {
            setStep(prev => prev + 1)
        } else {
            navigate("/login")
        }
    }

    const imageData = [
        { src: img_boarding1, top: '-11rem' },
        { src: img_boarding2, top: '' }, // ajuste conforme necessário
        { src: img_boarding3, top: '-1rem' },
    ];

    const currentImg = imageData[step] || imageData[0];

    return (
        <div className={`h-dvh 
            onBoard-stl object-contain  relative overflow-hidden  `}>

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImg.src} // importante para ativar a animação de saída/entrada
                    src={currentImg.src}
                    alt=""
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute w-full"
                    style={{ top: currentImg.top }}
                />
            </AnimatePresence>

            <div className="bg-[#e8e7e7] h-[18rem] w-full absolute -bottom-3 rounded-t-[2rem] p-2 mb-4 text-center">
                <div className="flex justify-center items-center mt-4 mb-5 gap-1 ">
                    <button className={` ${step === 0 ? 'w-7 bg-[#D72229]' : 'w-2 bg-[#D9D9D9]'}  h-2 rounded-full bloch`}></button>
                    <button className={`${step === 1 ? 'w-7 bg-[#D72229]' : 'w-2 bg-[#D9D9D9]'}  h-2 rounded-full  bloch`}></button>
                    <button className={`${step === 2 ? 'w-7 bg-[#D72229]' : 'w-2 bg-[#D9D9D9]'}  h-2 rounded-full bloch`}></button>
                </div>

                <div className="m-auto w-[66.5%] h-36 mb-2 ">
                    <h2 className="text-2xl text-[#14113E] font-bold mb-4 "> {current.title} </h2>
                    <p className="text-sm text-[#14113E] "> {current.descriptio} </p>
                </div>


                <Button onClick={nextStep} >{step === 2 ? "começar agora" : "Próximo"}</Button>
            </div>

        </div>
    )
}

export default OnBoarding
