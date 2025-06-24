import shape1 from "../../assets/Group 58.svg";
import { useNavigate } from "react-router-dom";




const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/home");
    }


    return (
        <div className="h-screen bg-[#E8E7E7] flex flex-col items-center ">
            <img src={shape1} className="w-full " />
            <img src="./Logo.png" alt="Logo" className="w-32" />

            <div className="pl-6 pr-6 w-full">
                <h1 className="text-center text-xl font-bold text-primary letter-2 mt-4 mb-4">Faça o Login</h1>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4 text-white">
                        <input
                            type="email"
                            placeholder="Email ou número de telefone"
                            className="w-full h-12 outline-none p-2 pl-4 rounded-md bg-primary text-sm"
                        />
                    </div>

                    <div className="rounded-md bg-primary flex pr-4 text-white">
                        <input
                            type="password"
                            placeholder="Senha"
                            className="w-full h-12 outline-none p-2 pl-4 bg-transparent"
                        />

                        <button className="uppercase text-[#dddd] text-xs block">Mostrar</button>
                    </div>

                    <div className="flex justify-between  mt-4 mb-4">
                        <div className="flex items-center text-sm gap-3">
                            <input type="checkbox" className="" />
                            <p>Lembrar de mim</p>
                        </div>

                        <p className="text-sm">Esqueceu a senha?</p>
                    </div>

                    <button type="submit" className="w-full h-12 bg-gradient-to-r from-[#C1171D]  to-[#E41B23] text-white text-sm rounded-md ">Entrar</button>
                </form>
            </div>

            <div className="text-sm mt-6 text-center">
                <p className="text-primary font-medium">Ainda não possui conta?</p>
                <p className="text-secundary underline">Criar conta</p>
            </div>

        </div>
    )
}

export default LoginPage