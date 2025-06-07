import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../../index.js';

describe('Hero Routes', () => {
  it('should return Spider-Man details for /heroes/spider-man', async () => {
    const response = await request(app).get('/heroes/spider-man');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Spider-Man',
      realName: 'Peter Parker',
      powers: ['Wall-crawling', 'Spider-sense', 'Superhuman strength'],
      origin: 'Queens, New York'
    });
  });

  it('should return 404 for non-existent hero', async () => {
    const response = await request(app).get('/heroes/unknown-hero');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Hero not found');
  });

  it('should support case-insensitive hero names', async () => {
    const response = await request(app).get('/heroes/SpIdEr-MaN');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Spider-Man');
  });
});