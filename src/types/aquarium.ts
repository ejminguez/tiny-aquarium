export type FishDirection = 'left' | 'right';

export type Fish = {
  id: string;
  name: string;
  species: string;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  direction: FishDirection;
  speed: number;
};

export type DecorationType = 'plant' | 'rock' | 'coral' | 'castle';

export type Decoration = {
  id: string;
  type: DecorationType;
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  scale?: number;
};
