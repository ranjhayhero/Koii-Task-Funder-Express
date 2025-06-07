export interface Hero {
  id: number;
  name: string;
  alias: string;
  powers: string[];
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Peter Parker',
    alias: 'Spider-Man',
    powers: ['Web Shooting', 'Spider Sense', 'Wall Crawling']
  },
  {
    id: 2,
    name: 'Tony Stark',
    alias: 'Iron Man',
    powers: ['Advanced Tech', 'Flight', 'Genius Intelligence']
  },
  {
    id: 3,
    name: 'Steve Rogers',
    alias: 'Captain America',
    powers: ['Super Strength', 'Enhanced Reflexes', 'Leadership']
  }
];