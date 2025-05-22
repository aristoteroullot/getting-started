const request = require('supertest');
const app = require('../src/index');
describe('GET /todos', () => {
    it('should return status 200 and an array', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

it('should match the todos snapshot', async () => { 
    const res = await request(app).get('/items'); 
    expect(res.body).toMatchSnapshot(); 
});