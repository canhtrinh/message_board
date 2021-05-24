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
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('supertest');
// import * as request from "supertest";
const app = require('../src/entry');
describe('basic test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true);
    });
});
describe('Get endpoints for querying channels', () => {
    it('should give me a list of channels', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get('/channels');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('channels');
    }));
});
describe("Get endpoints for querying channel's messages", () => {
    it("should have get endpoints for querying channel's messages", () => __awaiter(void 0, void 0, void 0, function* () {
        const channel = 1;
        const res = yield request(app).get(`/messages/${channel}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('channels');
    }));
});
describe('POST endpoint for submitting new messages to a channel', () => {
    it('should create a new post', () => __awaiter(void 0, void 0, void 0, function* () {
        const channel = 1;
        const res = yield request(app)
            .post('/channel')
            .send({
            userId: "001",
            messageText: 'TEST_MESSAGE',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('messageText');
    }));
});
const tests = null;
exports.default = tests;
