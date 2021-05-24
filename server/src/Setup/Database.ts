import ChannelDao from "../Models/Dao/ChannelDao";
import MessagesDao from "../Models/Dao/MessagesDao";


const sqlite3 = require("sqlite3").verbose();

export default class Database {

    private database;

    constructor() {
        
        this.database = this.connectToDatabase();
    
    }

    public connectToDatabase() {

        const db = new sqlite3.Database(':memory:', (err: any) => {
            err && console.error(err.message);
            !err && console.log('Connected to the in-memory SQlite database.');
        });

        db.serialize(() => {

            ChannelDao.createChannelTableAndCreateDummyData(db);
            
            ChannelDao.bulkCreateChannels(db);
            
            MessagesDao.createMessageTableAndCreateDummyData(db);
            
            MessagesDao.bulkCreateMessages(db);
        
        });

        return db;

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