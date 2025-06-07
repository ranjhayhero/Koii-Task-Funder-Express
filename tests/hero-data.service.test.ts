import { describe, it, expect } from 'vitest';
import { DefaultHeroDataService } from '../src/services/hero-data.service';

describe('DefaultHeroDataService', () => {
  const heroService = new DefaultHeroDataService();

  describe('getHeroByIdentifier', () => {
    it('should find hero by full name (case-insensitive)', () => {
      const hero = heroService.getHeroByIdentifier('Peter Parker');
      expect(hero).not.toBeNull();
      expect(hero?.alias).toBe('Spider-Man');
    });

    it('should find hero by alias (case-insensitive)', () => {
      const hero = heroService.getHeroByIdentifier('SPIDER-MAN');
      expect(hero).not.toBeNull();
      expect(hero?.name).toBe('Peter Parker');
    });

    it('should return null for unknown hero', () => {
      const hero = heroService.getHeroByIdentifier('Unknown Hero');
      expect(hero).toBeNull();
    });

    it('should handle empty or whitespace input', () => {
      const hero = heroService.getHeroByIdentifier('');
      expect(hero).toBeNull();
    });
  });

  describe('listHeroes', () => {
    it('should return all heroes', () => {
      const heroes = heroService.listHeroes();
      expect(heroes.length).toBe(3);
    });
  });

  describe('findHeroesByUniverse', () => {
    it('should find heroes in a specific universe (case-insensitive)', () => {
      const marvelHeroes = heroService.findHeroesByUniverse('MARVEL');
      expect(marvelHeroes.length).toBe(3);
    });

    it('should return empty array for unknown universe', () => {
      const dcHeroes = heroService.findHeroesByUniverse('DC');
      expect(dcHeroes.length).toBe(0);
    });

    it('should handle empty input', () => {
      const heroes = heroService.findHeroesByUniverse('');
      expect(heroes.length).toBe(0);
    });
  });
});