import { Application } from "express";
import DatabaseAccess from "../Models/Dao/DatabaseAccess";
import Database from "../Setup/Database";
import _BaseController from "./_BaseController";

export default class ChannelController extends _BaseController {

    private appInstance: Application;
    private database: Database;
    private CHANNEL_ENDPOINT: string = "/channels";

    constructor(appInstance: Application, database: any) {
        super();
        this.appInstance = appInstance;
        this.database = database;
        this.getChannels();
    }

    public async getChannels() {
        this.appInstance.get(this.CHANNEL_ENDPOINT, (req, res) => {
            DatabaseAccess.getAllChannels(this.database.getDatabaseInstance())
            .then((response: any) => res.json(response));
          });
    }

}