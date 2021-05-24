"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelDao_1 = __importDefault(require("../Models/Dao/ChannelDao"));
const MessagesDao_1 = __importDefault(require("../Models/Dao/MessagesDao"));
const sqlite3 = require("sqlite3").verbose();
class Database {
    constructor() {
        this.database = this.connectToDatabase();
    }
    connectToDatabase() {
        const db = new sqlite3
            .Database(':memory:', (err) => {
            err && console.error(err.message);
            !err && console.log('Connected to the in-memory SQlite database.');
        });
        db.serialize(() => {
            ChannelDao_1.default.createChannelTableAndCreateDummyData(db);
            ChannelDao_1.default.bulkCreateChannels(db);
            MessagesDao_1.default.createMessageTableAndCreateDummyData(db);
            MessagesDao_1.default.bulkCreateMessages(db);
        });
        return db;
    }
    getDatabaseInstance() {
        return this.database;
    }
    closeDatabaseConnection() {
        this.database.close((err) => {
            err && console.error(err.message);
            !err && console.log('Close the database connection.');
        });
    }
}
exports.default = Database;
