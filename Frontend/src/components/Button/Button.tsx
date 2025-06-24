
import { ReactNode } from "react"

// Import Motion animatio
import * as motion from "motion/react-client"

type ButtonProps = {
  children: ReactNode;
  onClick: () => void
};

type SquireButtonProps = {
  children: ReactNode;
  onClick: () => void
  title: string
};


const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={` uppercase block m-auto w-[18rem] h-10 bg-[#14113E] text-white text-sm rounded-full duration-200 `}
    >
      {children}
    </motion.button>
  )
}

export default Button

export const SquireButton = ({ children, title, onClick }: SquireButtonProps) => {
  return (
    <div onClick={onClick} className="w-20 h-24 text-center flex flex-col justify-center items-center ">
      <button className="bg-primary text-third w-[3.5rem] h-[3.5rem] rounded-xl block flex justify-center items-center mb-1">
        {children}
      </button>
      <p className="text-xs">{title}</p>
    </div>
  )
}