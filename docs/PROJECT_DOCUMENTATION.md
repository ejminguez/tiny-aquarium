# Tiny Aquarium

## 1. Project Overview

**Tiny Aquarium** is a small interactive aquarium simulation built with **SolidJS and TypeScript**.

The aquarium contains fish that swim around, respond to food, interact with their environment, and have simple individual characteristics. The project is intentionally small and playful, with the primary goal of learning SolidJS through building rather than following tutorials.

The project will start as a simple visual experiment and gradually introduce more interactive behavior.

> **Core idea:** Build a tiny world that feels alive.

---

## 2. Project Goals

The main goal is to learn SolidJS by building a small, enjoyable application.

### Learning Goals

Through the project, I want to become comfortable with:

* SolidJS fundamentals
* Fine-grained reactivity
* Signals
* Derived state
* Effects
* Components and props
* Lists and conditional rendering
* Event handling
* Local state management
* Basic animation
* Browser APIs
* TypeScript with SolidJS

### Development Goals

Build an aquarium where:

* Fish move around the tank
* Fish have individual properties
* Fish can be selected
* Fish can be fed
* Food falls into the aquarium
* Fish react to food
* Bubbles and decorations make the aquarium feel alive
* The aquarium changes between day and night
* Aquarium state can optionally persist locally

---

# 3. Project Philosophy

Tiny Aquarium is intentionally **not** a production application.

The project should avoid unnecessary complexity.

### Rules

**1. No backend**

All data should remain on the client.

**2. No authentication**

There are no accounts or users.

**3. No database**

Use browser storage if persistence is needed.

**4. No UI framework**

Build the interface using SolidJS and CSS.

**5. No premature architecture**

Do not create elaborate abstractions before they are necessary.

**6. Keep features small**

Every feature should be independently understandable.

**7. Prioritize experimentation**

If something seems interesting, experiment with it.

The purpose of the project is learning, not shipping a commercial product.

---

# 4. Target Stack

## Core

* SolidJS
* TypeScript
* Vite

## Styling

* CSS
* CSS animations
* CSS transitions

## Persistence

* `localStorage`

## Optional Browser APIs

* `requestAnimationFrame`
* `setInterval`
* `setTimeout`
* Web Audio API

No backend or external database is required.

---

# 5. Core Experience

When the user opens Tiny Aquarium, they should immediately see a small aquarium.

```text
┌─────────────────────────────────────────┐
│                                         │
│        🫧                     🫧         │
│                                         │
│              🐟                         │
│                           🐠            │
│                                         │
│    🫧            🐟                     │
│                                         │
│       🌿              🪨        🌿       │
│─────────────────────────────────────────│
│                                         │
│  Fish: 3       Food: 12       Day: 7   │
│                                         │
│             [ FEED FISH ]               │
└─────────────────────────────────────────┘
```

The aquarium should feel more like a **living toy** than a traditional dashboard.

---

# 6. Minimum Viable Aquarium

The first version should contain only:

### Aquarium

* Aquarium container
* Water background
* Simple decorations

### Fish

* Multiple fish
* Different positions
* Different directions
* Basic movement

### Interaction

* Click a fish
* Show its information
* Feed the fish

### Visuals

* Bubbles
* Plants
* Rocks

That is enough for Version 1.

---

# 7. Feature Roadmap

## Phase 1 — The Tank

### Goal

Create the aquarium environment.

### Features

* Aquarium component
* Water background
* Basic decorations
* Responsive sizing

### SolidJS concepts

* Components
* JSX
* Props
* Basic styling

---

# Phase 2 — Fish

### Goal

Put fish inside the aquarium.

Each fish should have:

```ts
type Fish = {
  id: string
  name: string
  species: string
  x: number
  y: number
  direction: "left" | "right"
  speed: number
}
```

### Features

* Render multiple fish
* Position fish
* Flip fish based on direction
* Move fish around the tank

### SolidJS concepts

* `createSignal`
* `<For>`
* Props
* Event handling

---

# Phase 3 — Fish Personalities

Give individual fish different characteristics.

Example:

```text
Goldie
Personality: Lazy
Speed: Slow

Zoomer
Personality: Energetic
Speed: Fast

Greg
Personality: Mysterious
Speed: Normal
```

Possible properties:

```ts
type FishPersonality =
  | "lazy"
  | "energetic"
  | "friendly"
  | "shy"
  | "mysterious"
```

The personality can influence behavior.

For example:

* Lazy fish move less
* Energetic fish move faster
* Shy fish avoid other fish
* Friendly fish follow nearby fish
* Mysterious fish occasionally behave strangely

---

# Phase 4 — Fish Selection

The user can click a fish.

A small information panel appears.

```text
┌─────────────────────┐
│       GOLDIE        │
│                     │
│ Species: Goldfish   │
│ Personality: Lazy   │
│                     │
│ Hunger              │
│ ██████░░░░  60%     │
│                     │
│ Happiness           │
│ ████████░░  80%     │
│                     │
│ Age: 12 days        │
└─────────────────────┘
```

### SolidJS concepts

* Selected state
* Conditional rendering
* Derived state
* Props

---

# Phase 5 — Feeding

Add a **Feed Fish** interaction.

When the user feeds the aquarium:

1. Food appears at the top of the aquarium.
2. Food falls downward.
3. Fish detect nearby food.
4. Fish swim toward it.
5. A fish eats the food.
6. Hunger increases.
7. Food disappears.

Conceptually:

```text
             •
             ↓
             ↓

        🐟 → •

             ↓

        🐟
```

This is the first feature where the aquarium starts behaving like a small simulation.

---

# Phase 6 — Fish Needs

Introduce simple fish statistics.

```ts
type FishStats = {
  hunger: number
  happiness: number
  energy: number
}
```

Stats should change over time.

For example:

```text
Hunger
100 ────────────────
 75 ─────────────
 50 ─────────
 25 ─────
  0
```

Feeding increases hunger satisfaction.

Time without food gradually decreases it.

Happiness can depend on things such as:

* Hunger
* Energy
* Environment
* Nearby fish

---

# Phase 7 — Bubbles

Add bubbles to make the aquarium feel alive.

Bubbles should:

* Spawn occasionally
* Float upward
* Move slightly sideways
* Disappear near the surface

Possible bubble state:

```ts
type Bubble = {
  id: string
  x: number
  y: number
  size: number
  speed: number
}
```

This phase is primarily an animation experiment.

---

# Phase 8 — Aquarium Decorations

Add:

* Plants
* Rocks
* Coral
* Treasure chest
* Castle
* Sunken ship

Eventually, the user could place decorations manually.

Potential interaction:

```text
[ 🌿 ] [ 🪨 ] [ 🏰 ] [ 🐚 ]

Click an item → place it in the aquarium
```

---

# Phase 9 — Day and Night

The aquarium should have a simple day/night cycle.

### Day

```text
☀️

Fish are active.
```

### Night

```text
🌙

Fish slow down.
Some fish sleep.
Lighting becomes darker.
```

Possible state:

```ts
type TimeOfDay = "day" | "night"
```

Fish behavior can depend on the current time.

---

# Phase 10 — Persistence

Save the aquarium using `localStorage`.

Persist:

* Fish
* Fish names
* Fish statistics
* Decorations
* Aquarium day
* Settings

Example:

```ts
localStorage.setItem(
  "tiny-aquarium",
  JSON.stringify(aquarium)
)
```

The aquarium should restore itself when the user returns.

---

# 8. Possible Future Features

These are deliberately optional.

They should only be built if they sound fun.

### Fish

* More species
* Fish aging
* Fish growth
* Rare fish
* Fish breeding
* Fish names
* Fish relationships
* Fish personalities

### Environment

* Different aquarium themes
* Weather
* Water quality
* Plants growing
* Decorations
* Seasonal events

### Interactions

* Feeding
* Playing with fish
* Cleaning the aquarium
* Rearranging decorations

### Visual

* Better fish sprites
* Water effects
* Lighting
* Particle effects
* Sound effects

### Game-like systems

* Coins
* Unlockable fish
* Unlockable decorations
* Aquarium levels
* Achievements

These are **future possibilities, not requirements**.

---

# 9. Data Model

The initial data model should remain simple.

```ts
type Fish = {
  id: string
  name: string
  species: string
  personality: FishPersonality

  x: number
  y: number

  direction: "left" | "right"
  speed: number

  hunger: number
  happiness: number
  energy: number

  age: number
}
```

Food:

```ts
type Food = {
  id: string
  x: number
  y: number
  amount: number
}
```

Bubble:

```ts
type Bubble = {
  id: string
  x: number
  y: number
  size: number
  speed: number
}
```

Decoration:

```ts
type Decoration = {
  id: string
  type: "plant" | "rock" | "coral" | "castle"
  x: number
  y: number
}
```

Aquarium:

```ts
type Aquarium = {
  fish: Fish[]
  food: Food[]
  bubbles: Bubble[]
  decorations: Decoration[]

  day: number
  timeOfDay: "day" | "night"
}
```

---

# 10. Suggested Component Structure

Keep the structure simple.

```text
src/
│
├── components/
│   ├── Aquarium.tsx
│   ├── Fish.tsx
│   ├── Food.tsx
│   ├── Bubble.tsx
│   ├── Decoration.tsx
│   ├── FishInfo.tsx
│   └── AquariumControls.tsx
│
├── data/
│   └── fish.ts
│
├── types/
│   └── aquarium.ts
│
├── App.tsx
├── index.tsx
└── styles.css
```

Don't create a dozen folders just because someone on YouTube told you that "scalable architecture" is important.

This project is tiny.

Let it be tiny.

---

# 11. SolidJS Concepts to Learn

The project should gradually introduce these concepts.

## Beginner

### Signals

```ts
const [count, setCount] = createSignal(0)
```

Use for:

* selected fish
* aquarium state
* counters
* UI state

### Effects

```ts
createEffect(() => {
  console.log(selectedFish())
})
```

Use for:

* responding to state changes
* timers
* simulation behavior

### Lists

```tsx
<For each={fish()}>
  {(fish) => <Fish fish={fish} />}
</For>
```

Use for:

* fish
* food
* bubbles
* decorations

### Conditional rendering

```tsx
<Show when={selectedFish()}>
  <FishInfo />
</Show>
```

Use for:

* fish information
* menus
* dialogs
* aquarium states

---

# 12. Advanced SolidJS Concepts

Only explore these when the project naturally requires them.

* `createMemo`
* `createStore`
* `createResource`
* Context
* Effects and cleanup
* Fine-grained reactivity
* Component lifecycle
* Performance optimization

The goal isn't to use every SolidJS API.

The goal is to understand **why you would use one**.

---

# 13. Development Milestones

## Milestone 1

**"There is an aquarium."**

* Tank
* Background
* Decorations

## Milestone 2

**"There are fish."**

* Multiple fish
* Fish movement

## Milestone 3

**"The fish are different."**

* Names
* Personalities
* Speeds

## Milestone 4

**"I can interact with them."**

* Select fish
* View information

## Milestone 5

**"They respond to me."**

* Feeding
* Food movement
* Fish behavior

## Milestone 6

**"It feels alive."**

* Bubbles
* Animations
* Day/night

## Milestone 7

**"It remembers me."**

* Local persistence

At this point, the project is already complete.

Everything after this is bonus content.

---

# 14. Definition of Done

Tiny Aquarium is considered complete when:

* [ ] Aquarium renders correctly
* [ ] Multiple fish can exist
* [ ] Fish move around the aquarium
* [ ] Fish have different properties
* [ ] User can select a fish
* [ ] Fish information can be viewed
* [ ] User can feed the fish
* [ ] Fish respond to food
* [ ] Bubbles appear
* [ ] Aquarium has basic decorations
* [ ] Day/night state works
* [ ] Aquarium state can optionally persist locally

Anything beyond this is optional.

---

# 15. Learning Log

Because this is primarily a learning project, keep a small `LEARNING.md`.

Example:

```md
# What I Learned

## Day 1

- Solid components feel similar to React components.
- Signals are accessed by calling them like functions.
- Solid does not work exactly like React's re-rendering model.

## Day 2

- Learned how `<For>` works.
- Learned how to update an item inside a reactive array.

## Day 3

- Experimented with `createEffect`.
- Used an interval to move fish.

## Day 4

- Learned about cleanup for effects.
```

The learning log is part of the project.

---

# 16. Project Principles

When working on Tiny Aquarium:

### Build first.

Don't spend an hour reading documentation before writing anything.

### Break things.

Try weird implementations.

### Keep experiments.

If something works but you don't understand why, investigate it.

### Avoid tutorials whenever possible.

Use documentation when you're stuck.

### Don't optimize prematurely.

If three fish work, don't worry about supporting 10,000 fish.

### Don't turn it into a startup.

The moment you find yourself thinking:

> "Maybe I should add authentication..."

Stop.

You have been caught.

---

# 17. Stretch Goal

If the aquarium eventually becomes stable, introduce a deliberately weird feature:

## Greg

One fish behaves differently from everyone else.

Nobody knows why.

Greg might:

* swim in circles
* stare at the corner
* randomly chase bubbles
* sleep during the day
* refuse food
* follow the cursor
* occasionally disappear behind a plant

The behavior doesn't need to have a purpose.

It exists because **Greg is Greg**.

---

# 18. Final Vision

The final Tiny Aquarium should feel like opening a tiny digital terrarium.

There isn't necessarily a task to complete.

There isn't a dashboard telling you what to do.

You open it and see:

```text
        🫧

               🐟

   🌿                     🐠

             🫧

       🐟

   🌿          🪨

────────────────────────────

3 fish

Goldie is hungry.

Greg is staring at the castle.
```

And that's the entire point.

**Tiny Aquarium is a small, playful environment for learning SolidJS through experimentation, interaction, animation, and reactive state.**

