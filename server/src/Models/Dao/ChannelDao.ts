
export default class ChannelDao {
	
	public static createChannelTableAndCreateDummyData(db: any) {
		return db.run(`CREATE TABLE IF NOT EXISTS channels (
			channel_id INTEGER PRIMARY KEY AUTOINCREMENT,
        	channel TEXT
		)`, (err: any) => {
			if (err) {
				return console.error(err.message);
			}
			console.log('established channels tables.');
		});

	}

	public static bulkCreateChannels(db: any) {

		ChannelDao.addChannel(db, "NBC")
		ChannelDao.addChannel(db, "ABC")
		ChannelDao.addChannel(db, "CBS")

	}

    public static addChannel(db: any, channel: string) {

        return db.run(
            `INSERT INTO channels (channel) VALUES (?)`,
            [channel], (err:any) => console.log("added channel",channel,err)
        );
    
	}

    public static getAllChannels(db: any) {
    
		return new Promise((resolve, reject) => {

            db.all(`SELECT * FROM channels`, [], (err: any, result: any) => {
				if (err) {
					console.log('Error running sql: ',err);
					reject(err);
				} else {
					console.log("results",result);
					resolve(result);
				}
            });
          
		});
    
	}

}