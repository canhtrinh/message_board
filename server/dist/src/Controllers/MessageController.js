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
const MessagesDao_1 = __importDefault(require("../Models/Dao/MessagesDao"));
const _BaseController_1 = __importDefault(require("./_BaseController"));
class MessageController extends _BaseController_1.default {
    constructor(appInstance, database) {
        super();
        this.MESSAGE_ENDPOINT = "/messages";
        this.appInstance = appInstance;
        this.database = database;
        this.getAllMessagesForChannel();
    }
    getAllMessagesForChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            const routePath = this.MESSAGE_ENDPOINT + "/:channel";
            this.appInstance.get(routePath, (req, res) => {
                var _a;
                const channelId = parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.channel);
                MessagesDao_1.default.getAllMessagesForChannel(this.database.getDatabaseInstance(), channelId)
                    .then((response) => res.json(response));
            });
        });
    }
}
exports.default = MessageController;
