/**
 * Represents a hero with key attributes
 */
export interface Hero {
  id: string;
  name: string;
  alias: string;
  powers: string[];
  universe: string;
}

/**
 * Defines the contract for hero data service
 */
export interface HeroDataService {
  /**
   * Retrieves a hero by their name or alias
   * @param identifier - Name or alias of the hero
   * @returns Hero object or null if not found
   */
  getHeroByIdentifier(identifier: string): Hero | null;

  /**
   * Lists all available heroes
   * @returns Array of heroes
   */
  listHeroes(): Hero[];

  /**
   * Finds heroes by universe
   * @param universe - Universe to filter heroes
   * @returns Array of heroes in the specified universe
   */
  findHeroesByUniverse(universe: string): Hero[];
}