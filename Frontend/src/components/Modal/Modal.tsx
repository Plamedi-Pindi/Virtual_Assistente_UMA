import { BsChevronLeft } from "react-icons/bs";
import { ReactNode, RefObject } from "react";

type ModalType = {
    modalButtonRef: RefObject<HTMLButtonElement | null>,
    modalDivRef: RefObject<HTMLDivElement | null>
    children: ReactNode
}

const Modal = ({ modalDivRef, modalButtonRef, children }: ModalType) => {

    return (
        <div ref={modalDivRef} className={` w-full  bg-black/50 absolute z-[10]  backdrop-blur-[1.5px] overflow-hidden bottom-0 `} >
            <div className="bg-third  w-full absolute bottom-0 rounded-t-[1.5rem] p-4  pt-6 div-Child-Ref">

                <button
                    ref={modalButtonRef}
                    className="w-auto text-primary duration-700 flex  block justify-between  gap-4 text-sm mb-2"
                >
                    <BsChevronLeft className="text-xl text-primary " />
                    <span className="uppercase block font-bold">Pagamentos</span>
                </button>
                <div className="flex flex-col space-y-3">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal