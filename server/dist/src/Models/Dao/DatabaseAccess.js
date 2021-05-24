"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseAccess {
    static addChannel(db, channel, tag) {
        return db.run(`INSERT INTO channels (channel, tag) VALUES (?, ?)`, [channel, tag], (err) => console.log("added channel", channel, err));
    }
    static getAllChannels(db) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM channels`, [], (err, result) => {
                if (err) {
                    console.log('Error running sql: ');
                    console.log(err);
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
exports.default = DatabaseAccess;
