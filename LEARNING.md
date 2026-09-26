# What I Learned — Tiny Aquarium

## Phase 1 — The Tank

- **Solid components run only once**: Unlike React components which re-render whenever state changes, Solid component functions execute once during mounting. There is no virtual DOM diffing.
- **Direct DOM bindings**: In Solid, JSX expressions like `<div style={{ left: `${props.fish.x}%` }} />` compile to direct fine-grained DOM bindings.
- **Props are reactive accessors**: Never destructure `props` at the top level of a component (e.g., `const { fish } = props`), because doing so breaks reactivity. Always access properties directly on `props` (e.g., `props.fish.x`) or use `splitProps`.

## Phase 2 — Fish & Movement

- **Lists with `<For>`**: `<For each={fishes}>` efficiently maps items to DOM nodes. Unlike React's `.map()`, Solid's `<For>` tracks by item reference so existing items are preserved rather than re-instantiated on every list update.
- **Fine-Grained Stores with `createStore`**: In Solid 2.x, `createStore` enables deep fine-grained reactivity. Using draft mutations (`setFishes((draft) => { fish.x = nextX; })`) directly updates the specific attribute bindings of the changed fish without re-rendering the `<Fish />` component.
- **Simulation Loop & Cleanup**: Timers like `setInterval` can be instantiated directly within component initialization and cleanly unregistered using `onCleanup(() => clearInterval(interval))` when the component unmounts.
