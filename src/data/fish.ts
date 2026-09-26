import type { Fish } from '../types/aquarium';

export const initialFish: Fish[] = [
  {
    id: 'fish-1',
    name: 'Goldie',
    species: 'Goldfish',
    x: 20,
    y: 35,
    direction: 'right',
    speed: 1.6,
  },
  {
    id: 'fish-2',
    name: 'Zoomer',
    species: 'Neon Tetra',
    x: 65,
    y: 20,
    direction: 'left',
    speed: 2.8,
  },
  {
    id: 'fish-3',
    name: 'Greg',
    species: 'Clownfish',
    x: 45,
    y: 65,
    direction: 'right',
    speed: 1.2,
  },
  {
    id: 'fish-4',
    name: 'Bubbles',
    species: 'Blue Tang',
    x: 75,
    y: 50,
    direction: 'left',
    speed: 2.0,
  },
];

const SPECIES_PRESETS = [
  { species: 'Goldfish', defaultSpeed: 1.6 },
  { species: 'Neon Tetra', defaultSpeed: 2.6 },
  { species: 'Clownfish', defaultSpeed: 1.4 },
  { species: 'Blue Tang', defaultSpeed: 2.2 },
  { species: 'Angelfish', defaultSpeed: 1.8 },
  { species: 'Guppy', defaultSpeed: 2.4 },
];

const RANDOM_NAMES = [
  'Finley',
  'Splash',
  'Coral',
  'Pip',
  'Marlin',
  'Sunny',
  'Nemo',
  'Sparky',
  'Wave',
  'Barnaby',
];

export function createRandomFish(): Fish {
  const preset = SPECIES_PRESETS[Math.floor(Math.random() * SPECIES_PRESETS.length)];
  const name = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
  const id = `fish-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  return {
    id,
    name,
    species: preset.species,
    x: Math.floor(Math.random() * 70) + 15,
    y: Math.floor(Math.random() * 60) + 15,
    direction: Math.random() > 0.5 ? 'right' : 'left',
    speed: Number((preset.defaultSpeed * (0.8 + Math.random() * 0.4)).toFixed(1)),
  };
}
