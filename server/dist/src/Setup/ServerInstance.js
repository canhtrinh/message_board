"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../../configurations/constants");
const ChannelController_1 = __importDefault(require("../Controllers/ChannelController"));
const MessageController_1 = __importDefault(require("../Controllers/MessageController"));
const Database_1 = __importDefault(require("./Database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const ViewRenderer_1 = __importDefault(require("../View/ViewRenderer"));
class ServerInstance {
    constructor() {
        this.serverInstance = express_1.default();
        this.applyMiddleware();
        this.database = new Database_1.default();
        this.start();
    }
    start() {
        try {
            this.serverInstance.listen(constants_1.PORT, () => {
                console.log(`The server is running on port ${constants_1.PORT}`);
            });
            this.instantiateControllers(this.serverInstance, this.database);
            this.instantiateStaticView(this.serverInstance);
        }
        catch (exception) {
            console.error("The server instance failed to start");
        }
    }
    applyMiddleware() {
        this.serverInstance.use(cors_1.default());
        this.serverInstance.use(body_parser_1.default.urlencoded({ extended: false }));
        this.serverInstance.use(body_parser_1.default.json());
        this.serverInstance.use("/", express_1.default.Router());
        this.serverInstance.use(express_1.default.json());
        this.serverInstance.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
    }
    getServerInstance() {
        return this.serverInstance;
    }
    instantiateControllers(serverInstance, database) {
        const channelController = new ChannelController_1.default(serverInstance, database);
        const messageController = new MessageController_1.default(serverInstance, database);
    }
    instantiateStaticView(serverInstance) {
        const viewRenderer = new ViewRenderer_1.default(serverInstance);
    }
}
exports.default = ServerInstance;
