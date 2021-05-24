import { Application } from "express";
import MessagesDao from "../Models/Dao/MessagesDao";
import Database from "../Setup/Database";
import _BaseController from "./_BaseController";

export default class MessageController extends _BaseController {

    private appInstance: Application;
    private database: Database;
    private MESSAGE_ENDPOINT: string = "/messages";

    constructor(appInstance: Application, database: any) {

        super();
        
        this.appInstance = appInstance;
        
        this.database = database;
        
        this.getAllMessagesForChannel();

        this.postMessageToChannel();
    
    }

    public async getAllMessagesForChannel() {
        
        const routePath: string = this.MESSAGE_ENDPOINT + "/:channel";
        
        this.appInstance.get(routePath, (req, res) => {

            const channelId: number = parseInt(req?.params?.channel);
            
            MessagesDao
            .getAllMessagesForChannel(this.database.getDatabaseInstance(), channelId)
            .then((response: any) => res.json(response));
        
        });

    }

    public async postMessageToChannel() {
        
        const routePath: string = "/:channel";
        
        this.appInstance.post(routePath, (req, res) => {

            const channelId: number = parseInt(req?.params?.channel);

            const message: string = req?.body?.message;
            
            MessagesDao
            .postMessageToChannel(this.database.getDatabaseInstance(), message, channelId)
            .then((response: any) => res.json(response));
        
        });

    }

}

/*

CL curl testing:
curl -XPOST -d '{"message": "xyz"}' -H 'content-type: application/json' localhost:3001/1

or from JS debugger:
fetch("http://localhost:3001/1", {
    method: "post",
    body: JSON.stringify({ "message": "hello canh" }),
    headers: { "Content-Type": "application/json" },
})
.then((res) => res.json())
.then((json) => console.log(json));



*/