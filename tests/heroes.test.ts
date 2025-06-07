import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app'; // Adjust the import path as needed

describe('Hero Endpoints', () => {
  // Test static hero endpoints
  const staticHeroes = [
    { route: '/spiderman', name: 'Spider-Man' },
    { route: '/ironman', name: 'Iron Man' },
    { route: '/captainamerica', name: 'Captain America' }
  ];

  staticHeroes.forEach(hero => {
    it(`should return correct hero details for ${hero.route}`, async () => {
      const response = await request(app).get(hero.route);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', hero.name);
      expect(response.body).toHaveProperty('powers');
      expect(response.body).toHaveProperty('origin');
    });
  });

  // Test dynamic hero endpoint
  it('should return hero details for a valid hero name', async () => {
    const response = await request(app).get('/hero/thor');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Thor');
    expect(response.body.name).toBeDefined();
  });

  // Test case-insensitive matching
  it('should handle case-insensitive hero names', async () => {
    const variants = ['thor', 'THOR', 'Thor'];
    
    for (const heroName of variants) {
      const response = await request(app).get(`/hero/${heroName}`);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Thor');
    }
  });

  // Test error handling for invalid heroes
  it('should return 404 for non-existent heroes', async () => {
    const response = await request(app).get('/hero/unknownhero');
    
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toContain('Hero not found');
  });

  // Test error handling for empty hero name
  it('should handle empty hero name gracefully', async () => {
    const response = await request(app).get('/hero/');
    
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toContain('Invalid hero name');
  });
});