import axios from "axios";

// #########
const rasaAPI = axios.create({
    baseURL: "http://localhost:5005/webhooks/rest/webhook",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});


// #########
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

// #########
// export const getChatHistory = async (userId: string) => {
//     const response = await axios.get(`http://localhost:5005/conversations/${userId}/tracker`);
//     const events = response.data.events;

//     // Filtrar apenas mensagens do user e bot
//     const messages = events
//         .filter((event: any) => event.event === 'user' || event.event === 'bot')
//         .map((event: any) => ({
//             message: event.text,
//             from: event.event === 'user' ? 'user' : 'bot',
//             timestamp: event.timestamp
//         }));

//     return messages;
// }


export default rasaAPI;