import { ReactNode } from "react"

type chatType = {
    children: ReactNode,
    position: string,
    dimension: string,
}

export const ChatBox1 = ({children, position, dimension}: chatType) => {

    return (
        <div className={`w-auto h-auto inline-block bg-primary text-white text-sm p-4 relative rounded-lg ${position} ${dimension}`} >
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-l-transparent border-r-transparent border-b-[20px] border-b-primary rotate-[-90deg] absolute bottom-[-0.3rem] right-[-0.59376rem]"></div>

            <div className="text-wrap"> {children} </div>
        </div>
    )
}

export const ChatBox2 = ({children, position, dimension}: chatType) => {

    return (
        <div className={`w-auto h-auto inline-block bg-white text-black text-sm p-4 relative rounded-lg shadow-xl ${position} ${dimension}`} >
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-l-transparent border-r-transparent border-b-[20px] border-b-white rotate-[90deg] absolute bottom-[-0.3rem] left-[-0.6rem]"></div>

            <div className="text-wrap"> {children} </div>
        </div>
    )
}

