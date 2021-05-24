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
class ServerInstance {
    constructor() {
        this.serverInstance = express_1.default();
        this.database = new Database_1.default();
        this.start();
    }
    start() {
        try {
            this.serverInstance.listen(constants_1.PORT, () => {
                console.log(`The server is running on port ${constants_1.PORT}`);
            });
            this.instantiateControllers(this.serverInstance, this.database);
        }
        catch (exception) {
            console.error("The server instance failed to start");
        }
    }
    getServerInstance() {
        return this.serverInstance;
    }
    instantiateControllers(serverInstance, database) {
        const channelController = new ChannelController_1.default(serverInstance, database);
        const messageController = new MessageController_1.default(serverInstance, database);
    }
}
exports.default = ServerInstance;
