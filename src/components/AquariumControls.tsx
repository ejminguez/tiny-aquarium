import type { Component } from 'solid-js';

interface AquariumControlsProps {
  fishCount: number;
  isSwimming: boolean;
  onAddFish: () => void;
  onToggleSwimming: () => void;
  onReset: () => void;
}

export const AquariumControls: Component<AquariumControlsProps> = (props) => {
  return (
    <div class="aquarium-controls-panel">
      <div class="controls-stats">
        <div class="stat-badge">
          <span class="stat-label">Fish:</span>
          <span class="stat-value">{props.fishCount}</span>
        </div>
        <div class="stat-badge">
          <span class="stat-label">Motion:</span>
          <span class="stat-value">{props.isSwimming ? 'Swimming' : 'Paused'}</span>
        </div>
      </div>

      <div class="controls-buttons">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => props.onAddFish()}
        >
          Add Fish
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => props.onToggleSwimming()}
        >
          {props.isSwimming ? 'Pause' : 'Resume'}
        </button>

        <button
          type="button"
          class="btn btn-ghost"
          onClick={() => props.onReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AquariumControls;
