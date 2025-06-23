import { ReactNode } from "react"

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
    <button onClick={onClick} className={` uppercase block m-auto w-[18rem] h-10 bg-[#14113E] text-white text-sm rounded-full `}>
      {children}
    </button>
  )
}

export default Button

export const SquireButton = ({ children, title }: SquireButtonProps) => {
  return (
    <div className="w-20 h-28 text-center flex flex-col justify-cente items-center">
      <button className="bg-primary text-third w-16 h-16 rounded-xl block ">
        {children}
      </button>
      <p className="text-xs">{title}</p>
    </div>
  )
}