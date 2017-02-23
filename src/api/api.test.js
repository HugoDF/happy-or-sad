const test = require('ava');
const api = require('./api');
const request = require('supertest');

test('API should return 200 ok with well-formed response if params are correct', (t) => {
  return request(api)
    .post('/rateMood')
    .send({ text: 'happy sad' })
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      const content = Object.keys(res.body);
      t.true(content.includes('mood'));
    });
});

test('API should have correct access control headers set', (t) => {
  return request(api)
    .post('/rateMood')
    .send({ text: 'happy sad' })
    .expect('Access-Control-Allow-Origin', '*')
    .expect('Access-Control-Allow-Headers', 'Content-Type');
});
