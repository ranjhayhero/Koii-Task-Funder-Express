import { Hero, HeroDataService } from '../types/hero';

/**
 * Implementation of HeroDataService with a static set of heroes
 */
export class DefaultHeroDataService implements HeroDataService {
  // Static list of heroes
  private heroes: Hero[] = [
    {
      id: '1',
      name: 'Peter Parker',
      alias: 'Spider-Man',
      powers: ['Web-slinging', 'Spider-sense', 'Wall-crawling'],
      universe: 'Marvel'
    },
    {
      id: '2',
      name: 'Tony Stark',
      alias: 'Iron Man',
      powers: ['Genius-level intellect', 'Advanced armor', 'Flight'],
      universe: 'Marvel'
    },
    {
      id: '3',
      name: 'Steve Rogers',
      alias: 'Captain America',
      powers: ['Super soldier serum', 'Enhanced strength', 'Shield mastery'],
      universe: 'Marvel'
    }
  ];

  /**
   * Retrieve a hero by name or alias (case-insensitive)
   * @param identifier - Name or alias of the hero
   * @returns Hero object or null if not found
   */
  getHeroByIdentifier(identifier: string): Hero | null {
    if (!identifier) return null;

    const normalizedIdentifier = identifier.toLowerCase().trim();
    return this.heroes.find(
      hero => 
        hero.name.toLowerCase() === normalizedIdentifier || 
        hero.alias.toLowerCase() === normalizedIdentifier
    ) || null;
  }

  /**
   * List all available heroes
   * @returns Array of heroes
   */
  listHeroes(): Hero[] {
    return [...this.heroes];
  }

  /**
   * Find heroes by universe (case-insensitive)
   * @param universe - Universe to filter heroes
   * @returns Array of heroes in the specified universe
   */
  findHeroesByUniverse(universe: string): Hero[] {
    if (!universe) return [];

    const normalizedUniverse = universe.toLowerCase().trim();
    return this.heroes.filter(
      hero => hero.universe.toLowerCase() === normalizedUniverse
    );
  }
}