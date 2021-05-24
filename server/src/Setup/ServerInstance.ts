import express, { Application } from "express";
import { PORT } from "../../configurations/constants";
import ChannelController from "../Controllers/ChannelController";
import Database from "./Database";

export default class ServerInstance {

    private serverInstance: Application;
    private database;

    constructor() {

        this.serverInstance = express();

        this.database = new Database(null);
        
        this.start();
        
    
    }

    public start(): void {
        
        try {

            this.serverInstance.listen(PORT, () => {
                console.log(`The server is running on port ${PORT}`)
            });
            this.instantiateControllers(this.serverInstance, this.database);

        } catch (exception) {

            console.error("The server instance failed to start");
        
        }

    }

    public getServerInstance(): Application {
        
        return this.serverInstance;
    
    }

    public instantiateControllers(serverInstance: Application, database: any) {

        const channelController = new ChannelController(serverInstance, database);

    }

}