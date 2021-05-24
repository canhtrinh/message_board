
export default class MessagesDao {

    public static createMessageTableAndCreateDummyData(db: any) {

        return db.run(`CREATE TABLE IF NOT EXISTS messages (
            message_id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT,
            channel_id INTEGER NOT NULL,
            FOREIGN KEY (channel_id)
                REFERENCES channels (channel_id)
        )`, (err: any) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('established messages table.');
        });
    
    }

    public static bulkCreateMessages(db: any) {

        MessagesDao.addMessage(db, "Welcome to NBC", 1);
        MessagesDao.addMessage(db, "Welcome to ABC", 2);
        MessagesDao.addMessage(db, "Welcome to CBS", 3);
    
    }

    public static addMessage(db: any, message: string, channelId: number) {
        return db.run(
            `INSERT INTO messages (message, channel_id) VALUES (?, ?)`,
            [message, channelId], 
            (err:any) => console.log("added message for channel",message, channelId, err)
        );
    }

    public static getAllMessagesForChannel(db: any, channelId: number) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM messages WHERE channel_id=${channelId}`, [], (err: any, result: any) => {
                if (err) {
                    console.log('Error running sql: ',err);
                    reject(err)
                } else {
                    console.log("results",result);
                    resolve(result)
                }
            })
        });
    }

}