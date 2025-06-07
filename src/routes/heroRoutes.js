const express = require('express');
const router = express.Router();

// Hero data with case-insensitive matching
const heroes = {
  'spiderman': { 
    name: 'Spider-Man', 
    realName: 'Peter Parker', 
    firstAppearance: 'Amazing Fantasy #15 (1962)' 
  },
  'ironman': { 
    name: 'Iron Man', 
    realName: 'Tony Stark', 
    firstAppearance: 'Tales of Suspense #39 (1963)' 
  },
  'captainamerica': { 
    name: 'Captain America', 
    realName: 'Steve Rogers', 
    firstAppearance: 'Captain America Comics #1 (1941)' 
  }
};

// Static routes
router.get('/spiderman', (req, res) => {
  res.json(heroes['spiderman']);
});

router.get('/ironman', (req, res) => {
  res.json(heroes['ironman']);
});

router.get('/captainamerica', (req, res) => {
  res.json(heroes['captainamerica']);
});

// Dynamic hero route with case-insensitive matching
router.get('/:heroName', (req, res) => {
  const heroName = req.params.heroName.toLowerCase();
  
  const hero = heroes[heroName];
  
  if (hero) {
    res.json(hero);
  } else {
    res.status(404).json({ 
      error: 'Hero not found', 
      message: `No hero found with the name: ${req.params.heroName}` 
    });
  }
});

module.exports = router;