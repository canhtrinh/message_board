"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseAccess_1 = __importDefault(require("../Models/Dao/DatabaseAccess"));
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
        this.createTableAndCreateDummyData(db);
        return db;
    }
    createTableAndCreateDummyData(db) {
        db.run(`CREATE TABLE IF NOT EXISTS channels (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            channel TEXT,
            tag TEXT
        )`, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('established tables.');
            this.bulkCreateChannels(db);
        });
    }
    bulkCreateChannels(db) {
        DatabaseAccess_1.default.addChannel(db, "NBC", "001");
        DatabaseAccess_1.default.addChannel(db, "ABC", "002");
        DatabaseAccess_1.default.addChannel(db, "CBS", "003");
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
