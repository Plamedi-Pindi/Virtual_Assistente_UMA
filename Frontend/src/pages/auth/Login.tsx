import { useState } from "react";
import shape1 from "../../assets/Group 58.svg";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import "./Login.css";


interface FormType {
    email: string,
    password: string
}
interface ErrorType {
    emailError: string,
    passeError: string
}

const LoginPage = () => {
    const [form, setForm] = useState<FormType>({ email: '', password: '' });
    const [error, setError] = useState<ErrorType>({ emailError: '', passeError: '' });
    const [isLoading, setIsLoading] = useState(false);

    const isEmailError = error.emailError.length !== 0;
    const isPasswordError = error.passeError.length !== 0;

    // variable to handle loading icon
    const LoadIcon = (
        <div className="flex items-center gap-3">
            <Loader className="animate-load" />
            <p>Loading...</p>
        </div>
    )

    // const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            if (form.email.trim().length == 0) {
                setError({ passeError: "", emailError: "Introduza um email válido!" })
            } else if (form.password.trim().length == 0) {
                setError({ passeError: "Introduza uma senha válido!", emailError: "" })
            } else if (form.password.trim().length < 8) {
                setError({ passeError: "A senha não pode conter menos 8 catacteres!", emailError: "" })
            } else {
                setError({ passeError: "", emailError: "" })
                setForm({ email: '', password: '' })
            }
        }, 1500);


        // navigate("/home");
    }


    return (
        <div className="min-h-dvh bg-[#E8E7E7] flex flex-col items-center  ">
            <img src={shape1} className="w-full " />
            <img src="./Logo.png" alt="Logo" className="w-32" />

            <div className="pl-6 pr-6 w-full">
                <h1 className="text-center text-xl font-bold text-primary letter-2 mt-4 mb-4">Faça o Login</h1>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className=" text-white">
                        <input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            value={form.email}
                            type="email"
                            placeholder="Email ou número de telefone"
                            className="w-full h-12 outline-none p-2 pl-4 rounded-md bg-primary text-sm"
                        />
                    </div>
                    {/* Handle Error message */}
                    <div className={`bg-red-200 p-1 text-sm rounded text-red-900 pl-4 ${isEmailError ? 'block' : 'hidden'}`}>{error.emailError}</div>

                    <div className="rounded-md bg-primary flex pr-4 mt-4 text-white">
                        <input
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            value={form.password}
                            type="password"
                            placeholder="Senha"
                            className="w-full h-12 outline-none p-2 pl-4 bg-transparent"
                        />

                        <button className="uppercase text-[#dddd] text-xs block">Mostrar</button>
                    </div>
                    {/* Handle Error message */}
                    <div className={`bg-red-200 p-1 text-sm rounded text-red-900 pl-4 ${isPasswordError ? 'block' : 'hidden'}`}>{error.passeError}</div>


                    <div className="flex justify-between  mt-4 mb-4">
                        <div className="flex items-center text-sm gap-3">
                            <input type="checkbox" className="" />
                            <p>Lembrar de mim</p>
                        </div>

                        <p className="text-sm">Esqueceu a senha?</p>
                    </div>

                    <button type="submit" className="w-full h-12 bg-gradient-to-r from-[#C1171D]  to-[#E41B23] text-white text-sm rounded-md flex justify-center items-center duration-700 ">{isLoading ? LoadIcon : 'Entrar'}</button>
                </form>
            </div>

            <div className="text-sm mt-6 mb-6  text-center">
                <p className="text-primary font-medium">Ainda não possui conta?</p>
                <p className="text-secundary underline">Criar conta</p>
            </div>


        </div>
    )
}

export default LoginPage