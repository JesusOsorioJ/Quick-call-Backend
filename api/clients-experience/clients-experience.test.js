const supertest = require('supertest');
const clientsExperienceModel = require('../clients-experience/clients-experience.model');
const app = require('../../app');
const request = supertest(app);

describe('Clients-Experience testing', () => {
    describe('GET /api/clients-experiences', () =>{
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/clients-experiences');
            expect(response.statusCode).toEqual(200);
        });
        test('should respond with array of experiences', async () => {
            const response = await request.get('/api/clients-experiences');
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    image: expect.any(String),
                    name: expect.any(String),
                    experience: expect.any(String),
                })
            ]))
        })
    })
    describe('POST /api/clients-experiences', () =>{
        const experience = { image: 'testing', name: 'testing', experience: 'testing' }
        test('should respond with status code 201', async () => {
            const response = await request.post('/api/clients-experiences').send(experience);
            expect(response.statusCode).toEqual(201);
        })
        test('should respond with new experience', async () => {
            const response = await request.post('/api/clients-experiences').send(experience);
            expect(response.body).toEqual(expect.objectContaining(experience));
        })
    })
})
