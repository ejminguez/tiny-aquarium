import type { Component } from 'solid-js';
import type { Fish as FishModel } from '../types/aquarium';

interface FishProps {
  fish: FishModel;
  onClick?: (fish: FishModel) => void;
}

export const Fish: Component<FishProps> = (props) => {
  // Helper to choose species color schemes
  const getSpeciesColors = (species: string) => {
    switch (species.toLowerCase()) {
      case 'goldfish':
        return {
          body: '#f97316',
          belly: '#fdba74',
          fin: '#ea580c',
          tail: '#ea580c',
          pattern: '#fb923c',
        };
      case 'neon tetra':
        return {
          body: '#0284c7',
          belly: '#ef4444',
          fin: '#38bdf8',
          tail: '#ef4444',
          pattern: '#06b6d4',
        };
      case 'clownfish':
        return {
          body: '#ea580c',
          belly: '#f97316',
          fin: '#c2410c',
          tail: '#c2410c',
          pattern: '#ffffff',
          hasStripes: true,
        };
      case 'blue tang':
        return {
          body: '#2563eb',
          belly: '#1d4ed8',
          fin: '#1e40af',
          tail: '#eab308',
          pattern: '#3b82f6',
        };
      case 'angelfish':
        return {
          body: '#a855f7',
          belly: '#c084fc',
          fin: '#9333ea',
          tail: '#7e22ce',
          pattern: '#e9d5ff',
        };
      default:
        return {
          body: '#10b981',
          belly: '#6ee7b7',
          fin: '#059669',
          tail: '#047857',
          pattern: '#34d399',
        };
    }
  };

  const isFlipped = () => props.fish.direction === 'left';
  const colors = () => getSpeciesColors(props.fish.species);

  return (
    <div
      class="fish-container"
      style={{
        left: `${props.fish.x}%`,
        top: `${props.fish.y}%`,
      }}
      onClick={() => props.onClick?.(props.fish)}
      role="button"
      aria-label={`${props.fish.name} the ${props.fish.species}`}
    >
      {/* Name tag with counter-transform so text stays readable regardless of fish direction */}
      <div class="fish-nametag">
        {props.fish.name}
      </div>

      <div
        class="fish-sprite"
        style={{
          transform: `scaleX(${isFlipped() ? -1 : 1})`,
        }}
      >
        <svg
          viewBox="0 0 90 56"
          width="74"
          height="46"
          xmlns="http://www.w3.org/2000/svg"
          class="fish-svg"
        >
          <defs>
            <linearGradient id={`grad-${props.fish.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color={colors().body} />
              <stop offset="60%" stop-color={colors().belly} />
            </linearGradient>
          </defs>

          {/* Tail Fin with wagging animation */}
          <path
            class="fish-tail-fin"
            d="M20 28 C8 12, 0 8, 2 28 C0 48, 8 44, 20 28 Z"
            fill={colors().tail}
            opacity="0.9"
          />

          {/* Dorsal fin (top) */}
          <path
            d="M38 18 C46 6, 62 10, 56 20 Z"
            fill={colors().fin}
            opacity="0.85"
          />

          {/* Pelvic fin (bottom) */}
          <path
            d="M44 36 C42 46, 50 48, 52 36 Z"
            fill={colors().fin}
            opacity="0.85"
          />

          {/* Main Fish Body (Facing right by default: tail at left x~20, head at right x~84) */}
          <path
            d="M20 28 C26 14, 52 10, 74 20 C82 24, 86 28, 84 30 C80 34, 72 44, 48 44 C26 44, 20 28, 20 28 Z"
            fill={`url(#grad-${props.fish.id})`}
          />

          {/* Clownfish stripes if applicable */}
          {colors().hasStripes && (
            <>
              <path
                d="M42 16 C48 18, 48 38, 42 42"
                stroke="#ffffff"
                stroke-width="4.5"
                stroke-linecap="round"
                fill="none"
              />
              <path
                d="M60 20 C64 22, 64 34, 60 38"
                stroke="#ffffff"
                stroke-width="3.5"
                stroke-linecap="round"
                fill="none"
              />
            </>
          )}

          {/* Side pectoral fin with flutter animation */}
          <path
            class="fish-pectoral-fin"
            d="M48 28 C42 34, 38 40, 44 42 C48 40, 54 34, 48 28 Z"
            fill={colors().fin}
          />

          {/* Eye */}
          <circle cx="72" cy="24" r="4.2" fill="#ffffff" />
          <circle cx="73.5" cy="24" r="2.2" fill="#0f172a" />
          <circle cx="74.5" cy="23" r="0.8" fill="#ffffff" />

          {/* Smile / Mouth */}
          <path
            d="M82 29 C80 31, 77 30, 76 30"
            stroke="#7c2d12"
            stroke-width="1.2"
            stroke-linecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Fish;
