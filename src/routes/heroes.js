const express = require('express');
const router = express.Router();

// Hero data - can be expanded or moved to a separate data file
const heroData = {
  'spiderman': {
    name: 'Spider-Man',
    realName: 'Peter Parker',
    powers: ['Wall-crawling', 'Spider-sense', 'Web-shooting']
  },
  'ironman': {
    name: 'Iron Man',
    realName: 'Tony Stark',
    powers: ['Powered Armor', 'Genius-level Intellect', 'Advanced Technology']
  },
  'captainamerica': {
    name: 'Captain America',
    realName: 'Steve Rogers',
    powers: ['Peak Human Strength', 'Enhanced Durability', 'Vibranium Shield']
  }
};

// Dynamic hero route with case-insensitive matching
router.get('/:heroName', (req, res) => {
  const heroName = req.params.heroName.toLowerCase();
  
  const hero = heroData[heroName];
  
  if (!hero) {
    return res.status(404).json({
      error: 'Hero not found',
      message: `No hero found with the name: ${req.params.heroName}`
    });
  }
  
  res.json(hero);
});

// List all heroes route
router.get('/', (req, res) => {
  const heroList = Object.keys(heroData).map(key => heroData[key]);
  res.json(heroList);
});

module.exports = router;