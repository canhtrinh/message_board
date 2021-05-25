import { SERVER_BASE_URL } from "../configuration/settings";
import { IMessageInfo } from "../model/dto/IMessageInfo";

export default class Rest {

    public static postMessageToChannel(messagePayload: IMessageInfo) {

        const message: string = messagePayload.message;
        
        const channel: number = messagePayload.channel_id;

        return new Promise((resolve, reject) => {
            fetch(SERVER_BASE_URL + `/${channel}`, {
                method: "post",
                body: JSON.stringify({ "message": message }),
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => resolve(res.json()))
            .catch(() => reject());
        });
    
    }

    public static getAllChannels() {
    
        return new Promise((resolve, reject) => {
            fetch(SERVER_BASE_URL + "/channels", {
                method: "get"
            })
            .then((res) => resolve(res.json()))
            .catch(() => reject());
        });

    }

    public static getAllMessagesForChannel(channel: number) {
    
        return new Promise((resolve, reject) => {
            fetch(SERVER_BASE_URL + `/messages/${channel}`, {
                method: "get"
            })
            .then((res) => resolve(res.json()))
            .catch(() => reject());
        });

    }



}