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

}