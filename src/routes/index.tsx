import { Title } from '@solidjs/meta';
import Aquarium from '../components/Aquarium';

export default function Home() {
  return (
    <main class="page-container">
      <Title>Tiny Aquarium</Title>
      <Aquarium />
    </main>
  );
}
