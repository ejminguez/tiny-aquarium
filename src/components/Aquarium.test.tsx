import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@solidjs/testing-library';
import { Aquarium } from './Aquarium';

describe('<Aquarium />', () => {
  it('renders aquarium container, initial fish and decorations', () => {
    const { getByLabelText, getByText, queryByText } = render(() => <Aquarium />);

    // Tank element
    expect(getByLabelText('Aquarium Tank')).toBeDefined();

    // Default fish rendered
    expect(getByText('Goldie')).toBeDefined();
    expect(getByText('Zoomer')).toBeDefined();
    expect(getByText('Greg')).toBeDefined();
    expect(getByText('Bubbles')).toBeDefined();

    // Controls display fish count
    expect(queryByText('4')).toBeDefined();
  });

  it('can add a new fish via the Add Fish button', async () => {
    const { getByRole, getAllByRole } = render(() => <Aquarium />);

    // Initially 4 fish buttons
    const initialFishBtns = getAllByRole('button', { name: /the/i });
    expect(initialFishBtns.length).toBe(4);

    const addBtn = getByRole('button', { name: /Add Fish/i });
    await fireEvent.click(addBtn);

    const updatedFishBtns = getAllByRole('button', { name: /the/i });
    expect(updatedFishBtns.length).toBe(5);
  });

  it('can toggle swimming mode', async () => {
    const { getByRole, getByText } = render(() => <Aquarium />);

    expect(getByText('Swimming')).toBeDefined();

    const pauseBtn = getByRole('button', { name: /Pause/i });
    await fireEvent.click(pauseBtn);

    expect(getByText('Paused')).toBeDefined();
  });
});
