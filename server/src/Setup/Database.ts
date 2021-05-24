import DatabaseAccess from "../Models/Dao/DatabaseAccess";

const sqlite3 = require("sqlite3").verbose();

export default class Database {

    private database;

    constructor() {
        this.database = this.connectToDatabase();
    }

    public connectToDatabase() {

        const db = new sqlite3
            .Database(':memory:', (err: any) => {
                err && console.error(err.message);
                !err && console.log('Connected to the in-memory SQlite database.');
            });

        this.createTableAndCreateDummyData(db);

        return db;
    }

    public createTableAndCreateDummyData(db: any) {

        db.run(`CREATE TABLE IF NOT EXISTS channels (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            channel TEXT,
            tag TEXT
        )`, (err: any) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('established tables.');
            this.bulkCreateChannels(db);
        });
    
    }

    public bulkCreateChannels(db: any) {

        DatabaseAccess.addChannel(db, "NBC", "001")
        DatabaseAccess.addChannel(db, "ABC", "002")
        DatabaseAccess.addChannel(db, "CBS", "003")
    
    }

    public getDatabaseInstance() {

        return this.database;
    
    }

    public closeDatabaseConnection() {
        
        this.database.close((err: any) => {
            err && console.error(err.message);
            !err && console.log('Close the database connection.');
        });
    
    }

}