
export default class DatabaseAccess {

    public static addChannel(db: any, channel: string, tag: string) {
        return db.run(
            `INSERT INTO channels (channel, tag) VALUES (?, ?)`,
            [channel, tag], (err:any) => console.log("added channel",channel,err)
        );
    }

    public static getAllChannels(db: any) {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM channels`, [], (err: any, result: any) => {
              if (err) {
                console.log('Error running sql: ')
                console.log(err)
                reject(err)
              } else {
                  console.log("results",result);
                resolve(result)
              }
            })
          })
    }

    // public static runInsertQueryWithParams(db: any, params: string[]) {
    //     const columnList: string = params.reduce( (a,b) => a + b, "(") + ")";
    //     return db.run(
    //         `INSERT INTO channels (channel, tag) VALUES (?, ?)`,
    //         params, 
    //         (err:any, result: any) => {
    //             if (err) {
    //                 console.error(err);
    //             }
    //         }
    //     );
    // }
}