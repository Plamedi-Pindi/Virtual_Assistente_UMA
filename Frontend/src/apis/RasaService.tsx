import axios from "axios";

const rasaAPI = axios.create({
    baseURL: "http://localhost:5005/webhooks/rest/webhook",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});


//   ====
export const sendMessageToRasa = async (
    sender: string,
    message: string
) => {
    try {

        const response = await rasaAPI.post("", {
            sender,
            message,
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao enviar mensagem para o Rasa:", error);
         throw error;
    }
}


export default rasaAPI;