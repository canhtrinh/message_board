import { Application } from "express";
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
        this.getMessages();
    }

    public async getMessages() {
        this.appInstance.get(this.MESSAGE_ENDPOINT, (req, res) => {
            this.database.getChannelInstance()
            .findAll()
            .then((response: any) => res.json(response));
          });
    }

}