import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import { Fish } from './Fish';
import type { Fish as FishType } from '../types/aquarium';

describe('<Fish />', () => {
  it('renders fish name and species', () => {
    const mockFish: FishType = {
      id: 'test-1',
      name: 'Goldie',
      species: 'Goldfish',
      x: 30,
      y: 40,
      direction: 'right',
      speed: 1.5,
    };

    const { getByText, getByRole } = render(() => <Fish fish={mockFish} />);

    expect(getByText('Goldie')).toBeDefined();
    const fishBtn = getByRole('button');
    expect(fishBtn.getAttribute('aria-label')).toBe('Goldie the Goldfish');
    expect(fishBtn.style.left).toBe('30%');
    expect(fishBtn.style.top).toBe('40%');
  });

  it('flips when direction is left', () => {
    const mockFish: FishType = {
      id: 'test-2',
      name: 'Zoomer',
      species: 'Neon Tetra',
      x: 70,
      y: 20,
      direction: 'left',
      speed: 2.0,
    };

    const { container } = render(() => <Fish fish={mockFish} />);
    const sprite = container.querySelector('.fish-sprite') as HTMLElement;
    expect(sprite).toBeDefined();
    expect(sprite.style.transform).toBe('scaleX(-1)');
  });
});
