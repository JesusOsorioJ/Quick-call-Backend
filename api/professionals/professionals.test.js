const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe("professionals endpoint", ()=>{
    describe('GET /', ()=>{
        test('should response with a 200 status code ', async () => {
            const response = await request.get('/api/professionals')
            expect(response.status).toEqual(200)
        })
    })
    describe('GET /:id', ()=>{
        test('should response with a 200 status code when id exist', async () => {
            const response = await request.get('/api/professionals/623b6d4a6c2808c7197995cd')
            expect(response.status).toEqual(200)
        })
        test('should response with a 404 status code when id doesnt exist', async () => {
            const response = await request.get('/api/professionals/id/1234')
            expect(response.status).toEqual(404)
        })
    })
    describe('POST /', ()=>{
        test('should response with a 201 status code when create a professionals', async () => {
            const create = { name:"jose buendia", email:"jbuen123@gmail.com"}
            const response = await request.post('/api/professionals').send(create)
            expect(response.status).toEqual(201)
        })
    })

    describe('PATCH /:id', ()=>{
        test('should response with a 200 status code when update a professionals', async () => {
            const update = { name: 'NAME DE TESTING PATCH' };
            const response = await request.patch('/api/professionals/623b6d4a6c2808c7197995cd').send(update);
            expect(response.status).toEqual(200)
        })
        test('should response with a 404 status code when professionals dont exist', async () => {
            const response = await request.patch('/api/professionals/623b6d4a6c287197995cd')
            expect(response.status).toEqual(404)
        })
    })
})
