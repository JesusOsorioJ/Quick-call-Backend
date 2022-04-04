const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('GET /jobs', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request.get('/api/jobs');
    expect(response.status).toEqual(200);
  })
});

describe('POST /jobs', () => {
  test('should respond with a 201 status code', async () => {
    const response = await request.post('/api/jobs').send({
      client: "clientTest@hotmail.com",
      professional: "professionalTestpro@gmail.com",
      startDate: "2022-03-13T00:00:00.000Z",
      completionDate: "2022-03-15T00:00:00.000Z",
      expectedCompletionTime: "2022-03-20T00:00:00.000Z",
      roles: "rolesTest",
      objectives: "objectivesTest",
      conditions: ["conditionsTest"],
      status: "pending",
      comments: "commentsTest",
      clientFeedback: "clientFeedbackTest",
    });

    expect(response.status).toEqual(201);
  })
});