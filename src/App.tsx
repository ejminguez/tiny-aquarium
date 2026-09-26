import { Title } from '@solidjs/meta';
import { Loading } from 'solid-js';
import { Router } from './router';
import './App.css';

export default function App() {
  return (
    <Router>
      {(props) => (
        <div class="app-shell">
          <Title>Tiny Aquarium</Title>
          <Loading fallback={<main class="loading-state">Loading aquarium…</main>}>
            {props.children}
          </Loading>
        </div>
      )}
    </Router>
  );
}
