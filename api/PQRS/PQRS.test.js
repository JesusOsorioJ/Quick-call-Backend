const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('GET /PQRS', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request.get('/api/PQRS');
    expect(response.status).toEqual(200);
  })
});

describe('POST /PQRS', () => {
  test('should respond with a 201 status code', async () => {
    const response = await request.post('/api/PQRS').send({
      client: "clientTest@hotmail.com",
      date: "2022-11-03T05:00:00.000Z",
      professional: "professionalTestpro@gmail.com",
      subject: "subjectTest",
      description: "descriptionTest",
      evidence: {
        videos: [
          "video.mp4",
          "video1.mp4"
        ],
        photos: [
          "fotos.png",
          "foto2.png"
        ]
      }
    });

    expect(response.status).toEqual(201);
  })
});