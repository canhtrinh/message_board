const request = require('supertest');
const app = require('../src/entry');


describe('basic test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    });
})

describe('Get endpoints for querying channels', () => {
    it('should give me a list of channels', async () => {
        const res = await request(app).get('/channels')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('channels')
    });
});

describe("Get endpoints for querying channel's messages", () => {
    it("should have get endpoints for querying channel's messages", async () => {
        const channel: number = 1;
        const res = await request(app).get(`/messages/${channel}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('channels')
    });
});

  describe('POST endpoint for submitting new messages to a channel', () => {
    it('should create a new post', async () => {
        const channel: number = 1;
        const res = await request(app)
        .post('/channel')
        .send({
          userId: 001,
          messageText: 'TEST_MESSAGE',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('messageText')
    })
  })  