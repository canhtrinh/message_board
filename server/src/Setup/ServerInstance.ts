import express, { Application } from "express";
import { PORT } from "../../configurations/constants";
import ChannelController from "../Controllers/ChannelController";
import MessageController from "../Controllers/MessageController";
import Database from "./Database";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import ViewRenderer from "../View/ViewRenderer";

export default class ServerInstance {

    private serverInstance: Application;
    private database;

    constructor() {

        this.serverInstance = express();

        this.applyMiddleware();

        this.database = new Database();
        
        this.start();
        
    
    }

    public start(): void {
        
        try {

            this.serverInstance.listen(PORT, () => {
                console.log(`The server is running on port ${PORT}`)
            });

            this.instantiateControllers(this.serverInstance, this.database);

            this.instantiateStaticView(this.serverInstance);

        } catch (exception) {

            console.error("The server instance failed to start");
        
        }

    }

    public applyMiddleware(): void {

        this.serverInstance.use(cors());

        this.serverInstance.use(bodyParser.urlencoded({ extended: false }));

        this.serverInstance.use(bodyParser.json());
        
        this.serverInstance.use("/", express.Router());

        this.serverInstance.use(express.json());

        this.serverInstance.use(express.static(path.join(__dirname, 'build')));

    }

    public getServerInstance(): Application {
        
        return this.serverInstance;
    
    }

    public instantiateControllers(serverInstance: Application, database: any) {

        const channelController = new ChannelController(serverInstance, database);
        
        const messageController = new MessageController(serverInstance, database);

    }

    public instantiateStaticView(serverInstance: Application) {

        const viewRenderer = new ViewRenderer(serverInstance);
    }

}