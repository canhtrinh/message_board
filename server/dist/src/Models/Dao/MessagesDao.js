"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessagesDao {
    static createMessageTableAndCreateDummyData(db) {
        return db.run(`CREATE TABLE IF NOT EXISTS messages (
            message_id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT,
            channel_id INTEGER NOT NULL,
            FOREIGN KEY (channel_id)
                REFERENCES channels (channel_id)
        )`, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('established messages table.');
        });
    }
    static bulkCreateMessages(db) {
        MessagesDao.addMessage(db, "Welcome to NBC! Please start a discussion below.", 1);
        MessagesDao.addMessage(db, "Welcome to ABC! Please start a discussion below.", 2);
        MessagesDao.addMessage(db, "Welcome to CBS! Please start a discussion below.", 3);
    }
    static addMessage(db, message, channelId) {
        return db.run(`INSERT INTO messages (message, channel_id) VALUES (?, ?)`, [message, channelId], (err) => console.log("added message for channel", message, channelId, err));
    }
    static getAllMessagesForChannel(db, channelId) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM messages WHERE channel_id=${channelId}`, [], (err, result) => {
                if (err) {
                    console.log('Error running sql: ', err);
                    reject(err);
                }
                else {
                    console.log("results", result);
                    resolve(result);
                }
            });
        });
    }
    static postMessageToChannel(db, message, channelId) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO messages (message, channel_id) VALUES(?,?)`, [message, channelId], (err) => {
                if (err) {
                    console.log(err.message);
                    reject();
                    return;
                }
                const message = `A row has been inserted with rowid ${channelId}`;
                resolve(message);
            });
        });
    }
}
exports.default = MessagesDao;
