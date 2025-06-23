import { SquireButton } from "../../components/Button/Button"

const HomePage = () => {
    return (
        <div className="bg-third h-screen">
            {/*  */}
            <header className="bg-gradient-to-t from-[#E41B23]  to-[#C1171D] h-44 rounded-b-[2rem] pt-6 pl-4 pr-4 p-2 shadow-[0_35px_60px_-10px_rgba(0,0,0,0.3)] ">

                <div className=" flex  justify-between items-center mb-10">
                    <div className="flex gap-4 text-white items-center text-sm">
                        <img src="./Ellipse 1.png" alt="User Avatar" className="w-12 h-12 object-cover" />
                        <p>Olá, Paulo 👋</p>
                    </div>

                    <img src="./Frame 53.png" className="object-cover" />
                </div>

                <h3 className="text-[1.5rem] text-third">O que desejas? </h3>
            </header>

            {/*  */}
            <section className="pl-4 pr-4 p-2 mt-10 grid grid-cols-3 gap-4">
                <SquireButton
                    onClick={() => ""}
                    title="Emissão de documentos">Text1
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Consultar as minhas notas">Text1
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Consultar horários">Text1
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Pagar serviços">Text1
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Assistente virtual">Text1
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Comprovativos">Text1
                </SquireButton>

            </section>

            {/*  */}

            
        </div>
    )
}

export default HomePage