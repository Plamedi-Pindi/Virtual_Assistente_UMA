import axios from "axios";

const rasaAPI = axios.create({
    baseURL: "http://localhost:5005",
    headers: {
        "Content-Type": "application/json",
    },
});

// interface RasaMessage {
//     text: string;
//     sender?: string;
// }

interface RasaResponse {
    responses: {
        text: string;
        // Outros possíveis campos como buttons, images, etc.
    }[];
}

//   ====
export const sendMessageToRasa = async (
    message: string,
    senderId: string = 'default'
): Promise<RasaResponse> => {
    try {
        const response = await rasaAPI.post<RasaResponse>('/webhooks/rest/webhook', {
            sender: senderId,
            message: message,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message to Rasa:', error);
        throw error;
    }
};

// Para rastrear conversas (opcional)
// export const getConversationTracker = async (senderId: string) => {
//     try {
//         const response = await rasaAPI.get(`/conversations/${senderId}/tracker`);
//         return response.data;
//     } catch (error) {
//         console.error('Error getting conversation tracker:', error);
//         throw error;
//     }
// };


export default rasaAPI;