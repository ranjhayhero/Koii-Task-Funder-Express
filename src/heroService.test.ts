import { describe, it, expect } from 'vitest';
import { HeroService } from './heroService';

describe('HeroService', () => {
  describe('findHero', () => {
    it('finds hero by full name (case-sensitive)', () => {
      const hero = HeroService.findHero('Peter Parker');
      expect(hero).toBeTruthy();
      expect(hero?.alias).toBe('Spider-Man');
    });

    it('finds hero by alias (case-insensitive)', () => {
      const hero = HeroService.findHero('spider-man');
      expect(hero).toBeTruthy();
      expect(hero?.name).toBe('Peter Parker');
    });

    it('returns null for non-existent hero', () => {
      const hero = HeroService.findHero('Batman');
      expect(hero).toBeNull();
    });

    it('handles whitespace in input', () => {
      const hero = HeroService.findHero(' Iron Man ');
      expect(hero).toBeTruthy();
      expect(hero?.name).toBe('Tony Stark');
    });
  });

  describe('getAllHeroes', () => {
    it('returns all heroes', () => {
      const heroes = HeroService.getAllHeroes();
      expect(heroes.length).toBe(3);
    });
  });
});