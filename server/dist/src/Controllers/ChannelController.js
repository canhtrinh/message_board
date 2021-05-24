"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelDao_1 = __importDefault(require("../Models/Dao/ChannelDao"));
const _BaseController_1 = __importDefault(require("./_BaseController"));
class ChannelController extends _BaseController_1.default {
    constructor(appInstance, database) {
        super();
        this.CHANNEL_ENDPOINT = "/channels";
        this.appInstance = appInstance;
        this.database = database;
        this.getAllChannels();
    }
    getAllChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            this.appInstance.get(this.CHANNEL_ENDPOINT, (req, res) => {
                ChannelDao_1.default.getAllChannels(this.database.getDatabaseInstance())
                    .then((response) => res.json(response));
            });
        });
    }
}
exports.default = ChannelController;
