"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChannelDao {
    static createChannelTableAndCreateDummyData(db) {
        return db.run(`CREATE TABLE IF NOT EXISTS channels (
			channel_id INTEGER PRIMARY KEY AUTOINCREMENT,
        	channel TEXT
		)`, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('established channels tables.');
        });
    }
    static bulkCreateChannels(db) {
        ChannelDao.addChannel(db, "NBC");
        ChannelDao.addChannel(db, "ABC");
        ChannelDao.addChannel(db, "CBS");
    }
    static addChannel(db, channel) {
        return db.run(`INSERT INTO channels (channel) VALUES (?)`, [channel], (err) => console.log("added channel", channel, err));
    }
    static getAllChannels(db) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM channels`, [], (err, result) => {
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
}
exports.default = ChannelDao;
