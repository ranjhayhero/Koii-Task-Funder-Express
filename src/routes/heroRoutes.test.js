const request = require('supertest');
const express = require('express');
const heroRoutes = require('./heroRoutes');

const app = express();
app.use('/heroes', heroRoutes);

describe('Hero Routes', () => {
  // Static route tests
  test('GET /heroes/spiderman returns Spider-Man details', async () => {
    const response = await request(app).get('/heroes/spiderman');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      name: 'Spider-Man',
      realName: 'Peter Parker'
    }));
  });

  test('GET /heroes/ironman returns Iron Man details', async () => {
    const response = await request(app).get('/heroes/ironman');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      name: 'Iron Man',
      realName: 'Tony Stark'
    }));
  });

  test('GET /heroes/captainamerica returns Captain America details', async () => {
    const response = await request(app).get('/heroes/captainamerica');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      name: 'Captain America',
      realName: 'Steve Rogers'
    }));
  });

  // Case-insensitive route tests
  test('GET /heroes/SpiderMan (mixed case) returns Spider-Man details', async () => {
    const response = await request(app).get('/heroes/SpiderMan');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      name: 'Spider-Man',
      realName: 'Peter Parker'
    }));
  });

  // 404 test for non-existent hero
  test('GET /heroes/superman returns 404', async () => {
    const response = await request(app).get('/heroes/superman');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Hero not found');
  });
});