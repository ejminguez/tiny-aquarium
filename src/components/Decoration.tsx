import type { Component } from 'solid-js';
import type { Decoration as DecorationModel } from '../types/aquarium';

interface DecorationProps {
  decoration: DecorationModel;
}

export const Decoration: Component<DecorationProps> = (props) => {
  return (
    <div
      class={`decoration decoration-${props.decoration.type}`}
      style={{
        left: `${props.decoration.x}%`,
        bottom: `${props.decoration.y}%`,
        transform: `scale(${props.decoration.scale ?? 1})`,
      }}
      aria-label={props.decoration.type}
    >
      {props.decoration.type === 'plant' && (
        <svg
          class="plant-svg"
          viewBox="0 0 70 120"
          width="70"
          height="120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem 1 */}
          <path
            d="M35 120 C32 90, 10 70, 18 35 C22 15, 30 5, 32 0 C28 15, 12 35, 12 60 C12 85, 30 105, 35 120 Z"
            fill="#22c55e"
            opacity="0.88"
          />
          {/* Stem 2 (taller, central) */}
          <path
            d="M35 120 C35 80, 52 50, 46 20 C42 5, 36 0, 36 0 C40 10, 58 35, 52 65 C48 90, 38 105, 35 120 Z"
            fill="#16a34a"
            opacity="0.95"
          />
          {/* Stem 3 (left small) */}
          <path
            d="M35 120 C30 95, 20 80, 24 55 C27 40, 28 30, 28 30 C22 45, 14 65, 20 85 C24 100, 32 110, 35 120 Z"
            fill="#15803d"
            opacity="0.82"
          />
        </svg>
      )}

      {props.decoration.type === 'rock' && (
        <svg
          class="rock-svg"
          viewBox="0 0 90 60"
          width="90"
          height="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main boulder */}
          <path
            d="M10 55 C5 35, 20 15, 45 10 C70 5, 82 25, 85 55 Z"
            fill="#475569"
          />
          {/* Highlight facet */}
          <path
            d="M18 50 C20 30, 35 18, 50 14 C40 22, 28 36, 25 52 Z"
            fill="#64748b"
          />
          {/* Small foreground stone */}
          <path
            d="M50 55 C45 42, 58 36, 72 38 C80 40, 85 48, 82 55 Z"
            fill="#334155"
          />
        </svg>
      )}

      {props.decoration.type === 'coral' && (
        <svg
          class="coral-svg"
          viewBox="0 0 80 80"
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Coral fan */}
          <path
            d="M40 78 C35 60, 20 50, 12 38 C5 28, 8 18, 18 18 C25 18, 28 26, 32 32 C34 22, 38 12, 48 10 C58 8, 62 18, 56 28 C52 35, 48 40, 48 48 C55 42, 65 40, 72 46 C80 52, 75 64, 62 68 C52 72, 45 72, 40 78 Z"
            fill="#f43f5e"
          />
          {/* Inner coral glow */}
          <path
            d="M40 74 C36 60, 26 50, 20 40 C16 32, 18 26, 24 26 C28 26, 31 32, 35 38 C38 30, 42 22, 48 20 C54 18, 56 26, 52 34 C46 44, 44 55, 40 74 Z"
            fill="#fb7185"
            opacity="0.75"
          />
        </svg>
      )}

      {props.decoration.type === 'castle' && (
        <svg
          class="castle-svg"
          viewBox="0 0 110 110"
          width="110"
          height="110"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main castle body */}
          <rect x="25" y="45" width="60" height="60" rx="3" fill="#64748b" />
          {/* Left turret */}
          <rect x="12" y="30" width="22" height="75" rx="2" fill="#475569" />
          <polygon points="10,30 23,8 36,30" fill="#3b82f6" />
          {/* Right turret */}
          <rect x="76" y="30" width="22" height="75" rx="2" fill="#475569" />
          <polygon points="74,30 87,8 100,30" fill="#3b82f6" />
          {/* Battlements / crenels */}
          <rect x="30" y="38" width="10" height="7" fill="#64748b" />
          <rect x="50" y="38" width="10" height="7" fill="#64748b" />
          <rect x="70" y="38" width="10" height="7" fill="#64748b" />
          {/* Gate */}
          <path d="M43 105 V75 C43 68, 67 68, 67 75 V105 Z" fill="#1e293b" />
          {/* Windows */}
          <rect x="19" y="45" width="8" height="14" rx="4" fill="#0f172a" />
          <rect x="83" y="45" width="8" height="14" rx="4" fill="#0f172a" />
          <circle cx="55" cy="58" r="6" fill="#0f172a" />
        </svg>
      )}
    </div>
  );
};

export default Decoration;
