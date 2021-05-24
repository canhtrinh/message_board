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
        this.postMessageToChannel();
    }
    getAllMessagesForChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            const routePath = this.MESSAGE_ENDPOINT + "/:channel";
            this.appInstance.get(routePath, (req, res) => {
                var _a;
                const channelId = parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.channel);
                MessagesDao_1.default
                    .getAllMessagesForChannel(this.database.getDatabaseInstance(), channelId)
                    .then((response) => res.json(response));
            });
        });
    }
    postMessageToChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            const routePath = "/:channel";
            this.appInstance.post(routePath, (req, res) => {
                var _a, _b;
                console.log("TRYING TO POST");
                const channelId = parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.channel);
                const message = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.message;
                MessagesDao_1.default
                    .postMessageToChannel(this.database.getDatabaseInstance(), message, channelId)
                    .then((response) => res.json(response));
            });
        });
    }
}
exports.default = MessageController;
// curl -XPOST -d '{"message": "xyz"}' -H 'content-type: application/json' localhost:3001/1
// fetch("http://localhost:3001/1", {
//   method: "post",
//   body: JSON.stringify({ message: "XXXX" }),
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
