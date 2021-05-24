"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const Channel_1 = require("../Models/DB/Channel");
class Database {
    constructor(database) {
        this.database = database;
        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './database.sqlite'
        });
        this.Channel = Channel_1.ChannelSchemaGenerator(this.sequelize);
        this.connect();
    }
    connect() {
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
            .catch((err) => { console.error('Unable to connect to the database:', err); });
    }
    getDatabaseInstance() {
        return this.sequelize;
    }
    getChannelInstance() {
        return this.Channel;
    }
    bulkCreateChannels() {
        this.getChannelInstance().bulkCreate([
            { channel: 'NBC', tag: '001' },
            { channel: 'ABC', tag: '002' },
            { channel: 'CBS', tag: '003' }
        ])
            .then(() => {
            return this.Channel.findAll();
        })
            .then((channels) => {
            console.log(channels);
        });
    }
}
exports.default = Database;
