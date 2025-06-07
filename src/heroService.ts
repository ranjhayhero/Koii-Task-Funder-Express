import { heroes, Hero } from './heroData';

export class HeroService {
  /**
   * Find a hero by name or alias (case-insensitive)
   * @param identifier Hero name or alias
   * @returns Hero object or null if not found
   */
  static findHero(identifier: string): Hero | null {
    const normalizedIdentifier = identifier.toLowerCase().trim();
    
    return heroes.find(
      hero => 
        hero.name.toLowerCase() === normalizedIdentifier || 
        hero.alias.toLowerCase() === normalizedIdentifier
    ) || null;
  }

  /**
   * Get all heroes
   * @returns Array of heroes
   */
  static getAllHeroes(): Hero[] {
    return heroes;
  }
}