const Sequelize = require('sequelize');
import {ChannelSchemaGenerator} from "../Models/DB/Channel";

export default class Database {

    private database;
    private sequelize;
    private Channel;

    constructor(database: any) {
        this.database = database;
        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './database.sqlite'
        });
        this.Channel = ChannelSchemaGenerator(this.sequelize);
        this.connect();
    }

    public connect() {

        this.sequelize
            .authenticate()
            .then(() => {

                console.log('Connection has been established successfully.');

                this.sequelize.sync({ force: true })
                .then(() => {

                    console.log(`Database & tables created!`);
                    this.bulkCreateChannels();

                });

            })
            .catch((err: any) => {console.error('Unable to connect to the database:', err);});

    }

    public getDatabaseInstance() {
        return this.sequelize;
    }

    public getChannelInstance() {
        return this.Channel;
    }

    public bulkCreateChannels() {
        this.getChannelInstance().bulkCreate([
            { channel: 'NBC', tag: '001' },
            { channel: 'ABC', tag: '002' },
            { channel: 'CBS', tag: '003' }
        ])
        .then(() => {
            return this.Channel.findAll();
        })
        .then((channels: any) => {
            console.log(channels);
        });
    }

}