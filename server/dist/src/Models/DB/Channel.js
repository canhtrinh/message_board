"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelSchemaGenerator = exports.channelInstance = exports.CHANNEL = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const SchemaGenerator_1 = require("./SchemaGenerator");
exports.CHANNEL = "channel";
exports.channelInstance = {
    channel: sequelize_1.default.TEXT,
    tag: sequelize_1.default.STRING
};
const ChannelSchemaGenerator = (sequelize) => SchemaGenerator_1.SchemaGenerator(sequelize, exports.CHANNEL, exports.channelInstance);
exports.ChannelSchemaGenerator = ChannelSchemaGenerator;
