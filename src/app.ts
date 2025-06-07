import express from 'express';

const app = express();

// Mock hero data
const heroData = {
  'spiderman': { 
    name: 'Spider-Man', 
    powers: ['Web Shooting', 'Spider Sense'], 
    origin: 'Bitten by a radioactive spider' 
  },
  'ironman': { 
    name: 'Iron Man', 
    powers: ['Powered Armor', 'Flight'], 
    origin: 'Genius inventor Tony Stark' 
  },
  'captainamerica': { 
    name: 'Captain America', 
    powers: ['Super Strength', 'Shield'], 
    origin: 'Super Soldier Serum' 
  },
  'thor': { 
    name: 'Thor', 
    powers: ['Hammer Wielding', 'Lightning'], 
    origin: 'Asgardian God of Thunder' 
  }
};

// Static hero routes
app.get('/spiderman', (req, res) => res.json(heroData['spiderman']));
app.get('/ironman', (req, res) => res.json(heroData['ironman']));
app.get('/captainamerica', (req, res) => res.json(heroData['captainamerica']));

// Dynamic hero route
app.get('/hero/:heroName?', (req, res) => {
  const heroName = req.params.heroName;
  
  if (!heroName) {
    return res.status(400).json({ error: 'Invalid hero name' });
  }

  const hero = Object.entries(heroData).find(
    ([key, value]) => key.toLowerCase() === heroName.toLowerCase()
  );

  if (hero) {
    res.json(hero[1]);
  } else {
    res.status(404).json({ error: 'Hero not found' });
  }
});

export default app;