import { createSignal, onCleanup, For, Component } from 'solid-js';
import { createStore } from 'solid-js';
import type { Fish as FishModel, Decoration as DecorationModel } from '../types/aquarium';
import { initialFish, createRandomFish } from '../data/fish';
import { Fish } from './Fish';
import { Decoration } from './Decoration';
import { AquariumControls } from './AquariumControls';

export const initialDecorations: DecorationModel[] = [
  { id: 'dec-1', type: 'plant', x: 4, y: 0, scale: 1.15 },
  { id: 'dec-2', type: 'plant', x: 11, y: 0, scale: 0.9 },
  { id: 'dec-3', type: 'rock', x: 22, y: 0, scale: 1.05 },
  { id: 'dec-4', type: 'castle', x: 46, y: 0, scale: 0.95 },
  { id: 'dec-5', type: 'coral', x: 73, y: 0, scale: 1.0 },
  { id: 'dec-6', type: 'plant', x: 86, y: 0, scale: 1.25 },
  { id: 'dec-7', type: 'rock', x: 91, y: 0, scale: 0.8 },
];

export const Aquarium: Component = () => {
  const [fishes, setFishes] = createStore<FishModel[]>(initialFish);
  const [decorations] = createSignal<DecorationModel[]>(initialDecorations);
  const [isSwimming, setIsSwimming] = createSignal(true);
  const [activeMessage, setActiveMessage] = createSignal<string | null>(null);

  let messageTimeout: ReturnType<typeof setTimeout> | null = null;

  const showMessage = (msg: string) => {
    setActiveMessage(msg);
    if (messageTimeout) clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
      setActiveMessage(null);
    }, 2800);
  };

  const handleAddFish = () => {
    const newFish = createRandomFish();
    setFishes((draft) => {
      draft.push(newFish);
    });
    showMessage(`Added ${newFish.name} the ${newFish.species}!`);
  };

  const handleToggleSwimming = () => {
    setIsSwimming((prev) => !prev);
    showMessage(!isSwimming() ? 'Fish are resting' : 'Fish are swimming!');
  };

  const handleReset = () => {
    setFishes((draft) => {
      draft.length = 0;
      draft.push(...initialFish.map((f) => ({ ...f })));
    });
    setIsSwimming(true);
    showMessage('Aquarium reset to initial state 🔄');
  };

  const handleFishClick = (fish: FishModel) => {
    showMessage(`You tapped ${fish.name} (${fish.species})!`);
  };

  // Movement physics loop: runs directly on mount in SolidJS
  const interval = setInterval(() => {
    if (!isSwimming()) return;

    setFishes((draft) => {
      for (let i = 0; i < draft.length; i++) {
        const fish = draft[i];
        let nextDir = fish.direction;
        const deltaX = (fish.direction === 'right' ? 1 : -1) * (fish.speed * 0.16);
        let nextX = fish.x + deltaX;

        // Boundary bounce
        if (nextX >= 88) {
          nextX = 88;
          nextDir = 'left';
        } else if (nextX <= 5) {
          nextX = 5;
          nextDir = 'right';
        } else if (Math.random() < 0.006) {
          // Spontaneous random turn
          nextDir = nextDir === 'right' ? 'left' : 'right';
        }

        // Gentle vertical drift
        const verticalDrift = (Math.random() - 0.5) * 0.35;
        const nextY = Math.min(76, Math.max(12, fish.y + verticalDrift));

        fish.x = Number(nextX.toFixed(2));
        fish.y = Number(nextY.toFixed(2));
        fish.direction = nextDir;
      }
    });
  }, 60);

    onCleanup(() => {
      clearInterval(interval);
      if (messageTimeout) clearTimeout(messageTimeout);
    });

  return (
    <div class="aquarium-wrapper">
      <header class="aquarium-header">
        <div class="header-title-row">
          <h1>Tiny Aquarium</h1>
        </div>
      </header>

      {/* Main Glass Tank Container */}
      <section class="aquarium-tank" aria-label="Aquarium Tank">
        {/* Glass reflection and light caustics */}
        <div class="aquarium-glass-shine" />
        <div class="aquarium-caustics" />

        {/* Ambient background bubbles */}
        <div class="ambient-bubbles">
          <span class="ambient-bubble b1" />
          <span class="ambient-bubble b2" />
          <span class="ambient-bubble b3" />
          <span class="ambient-bubble b4" />
          <span class="ambient-bubble b5" />
        </div>

        {/* Dynamic active notification / fish tap notice */}
        {activeMessage() && (
          <div class="aquarium-toast" role="status">
            {activeMessage()}
          </div>
        )}

        {/* Fish Layer */}
        <div class="fish-layer">
          <For each={fishes}>
            {(fish) => <Fish fish={fish} onClick={handleFishClick} />}
          </For>
        </div>

        {/* Decorations Layer */}
        <div class="decorations-layer">
          <For each={decorations()}>
            {(decoration) => <Decoration decoration={decoration} />}
          </For>
        </div>

        {/* Sand / Gravel bottom bed */}
        <div class="aquarium-sand">
          <div class="sand-texture" />
          <div class="sand-pebble p1" />
          <div class="sand-pebble p2" />
          <div class="sand-pebble p3" />
          <div class="sand-pebble p4" />
        </div>
      </section>

      {/* Controls & Metrics */}
      <AquariumControls
        fishCount={fishes.length}
        isSwimming={isSwimming()}
        onAddFish={handleAddFish}
        onToggleSwimming={handleToggleSwimming}
        onReset={handleReset}
      />
    </div>
  );
};

export default Aquarium;
