import express from 'express';

// Predefined hero details
const heroDatabase = {
  'spider-man': {
    name: 'Spider-Man',
    realName: 'Peter Parker',
    powers: ['Wall-crawling', 'Spider-sense', 'Superhuman strength'],
    origin: 'Queens, New York'
  },
  'iron-man': {
    name: 'Iron Man',
    realName: 'Tony Stark',
    powers: ['Genius-level intellect', 'Powered armor suit', 'Advanced technology'],
    origin: 'New York City'
  },
  'captain-america': {
    name: 'Captain America',
    realName: 'Steve Rogers',
    powers: ['Peak human strength', 'Enhanced agility', 'Expert tactician'],
    origin: 'Brooklyn, New York'
  }
};

export const heroRouter = express.Router();

// Dynamic hero route with case-insensitive matching
heroRouter.get('/:heroName', (req, res) => {
  const heroName = req.params.heroName.toLowerCase().replace(/\s+/g, '-');
  
  // Check if hero exists
  if (!heroDatabase[heroName]) {
    return res.status(404).json({
      error: 'Hero not found',
      message: `No information available for hero: ${req.params.heroName}`
    });
  }

  res.json(heroDatabase[heroName]);
});

// Static hero routes for convenience
Object.keys(heroDatabase).forEach(heroKey => {
  heroRouter.get(`/${heroKey}`, (req, res) => {
    res.json(heroDatabase[heroKey]);
  });
});