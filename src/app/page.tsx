import { A } from '@/components/A';
import { B } from '@/components/B';
import { C } from '@/components/C';
import { D } from '@/components/D';

export default function Home() {
  const f =
    typeof window === undefined
      ? undefined
      : new URL(window.location.href).searchParams.get('f');

  if (f === 'b') {
    return <B />;
  }

  if (f === 'c') {
    return <C />;
  }

  if (f === 'd') {
    return <D />;
  }

  return <A />;
}
