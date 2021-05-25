"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("../../configurations/constants");
class ViewRenderer {
    constructor(application) {
        this.application = application;
        this.initiateView();
    }
    initiateView() {
        var _a;
        const cb = (req, res) => {
            const relPath = "../../../../client/build/";
            console.log("DIRNAME", __dirname);
            res.sendFile(path_1.default.join(__dirname, relPath, constants_1.VIEW_URL));
        };
        (_a = this.application) === null || _a === void 0 ? void 0 : _a.get("/*", cb);
    }
}
exports.default = ViewRenderer;
