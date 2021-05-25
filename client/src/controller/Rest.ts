import { SERVER_BASE_URL } from "../configuration/settings";

export default class Rest {

    public static postChannel(message: string, channel: number) {
        fetch(SERVER_BASE_URL + `/${channel}`, {
            method: "post",
            body: JSON.stringify({ "message": message }),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
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
        fetch(SERVER_BASE_URL + `/messages/${channel}`, {
            method: "get"
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
    }

}