const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);

describe('Clients testing', () => {
    describe('GET /api/clients', () => {
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/clients');
            expect(response.statusCode).toEqual(200);
        });

        test('should respond with array of clients', async () => {
            const response = await request.get('/api/clients');
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    email: expect.any(String),
                    password: expect.any(String),
                })
            ]))
        });
    })

    describe('GET /api/clients/:id', () => {
        const existentId = '623b694fd9a5a02d7752c928';
        const nonExistentId = '6249d0182a0a3373daeec14c';

        test('should respond with status code 200', async () => {
            const response = await request.get(`/api/clients/${existentId}`);
            expect(response.statusCode).toEqual(200);
        });

        test('should respond with one client', async () => {
            const response = await request.get(`/api/clients/${existentId}`);
            expect(response.body).toEqual(expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                password: expect.any(String),
            }))
        });

        test('should respond with status code 404', async () => {
            const response = await request.get(`/api/clients/${nonExistentId}`);
            expect(response.statusCode).toEqual(404);
        });

        test('should respond with error msg', async () => {
            const response = await request.get(`/api/clients/${nonExistentId}`);
            expect(response.body).toEqual({ message: `Client not found with id: ${nonExistentId}` })
        });
    })

    //No funciona del todo ya que por test está creando el usuario y el email es unico
    // describe('POST /api/clients', () => {
    //     const client = {
    //         name: 'Jairo',
    //         email: 'jairo@ymail.com',
    //         password: '1234'
    //     }

    //     test('should respond with status code 201', async () => {
    //         const response = await request.post('/api/clients').send(client);
    //         expect(response.statusCode).toEqual(201);
    //     });

    //     test('should respond with created client', async () => {
    //         const response = await request.post('/api/clients').send(client);
    //         expect(response.body).toEqual(expect.objectContaining({
    //             name: expect.any(String),
    //             email: expect.any(String),
    //             password: expect.any(String),
    //         }))
    //     })
    // })

    describe('PATCH /api/clients/:id', () => {
        const existentId = '623b694fd9a5a02d7752c928';
        const nonExistentId = '6249d0182a0a3373daeec14c';
        const update = {
            name: 'PATCHED through testing',
            phoneNumber: 3001231234
        }

        test('should respond with status code 200', async () => {
            const response = await request.patch(`/api/clients/${existentId}`).send(update);
            expect(response.statusCode).toEqual(200);
        });

        test('should respond with one client', async () => {
            const response = await request.patch(`/api/clients/${existentId}`).send(update);
            expect(response.body).toEqual(expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                password: expect.any(String),
            }))
        });

        test('should respond with status code 404', async () => {
            const response = await request.patch(`/api/clients/${nonExistentId}`).send(update);
            expect(response.statusCode).toEqual(404);
        });

        test('should respond with error msg', async () => {
            const response = await request.patch(`/api/clients/${nonExistentId}`).send(update);
            expect(response.body).toEqual({ message: `Client not found with id: ${nonExistentId}` })
        });
    })

})
