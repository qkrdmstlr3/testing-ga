// import { A } from '@/components/A';
// import { B } from '@/components/B';
// import { C } from '@/components/C';
// import { D } from '@/components/D';

import { useRouter } from 'next/router';

export function A() {
  const router = useRouter();

  return <button onClick={() => router.push('?f=b')}>A</button>;
}

export default function Home() {
  const f = '';

  // if (f === 'b') {
  //   return <B />;
  // }

  // if (f === 'c') {
  //   return <C />;
  // }

  // if (f === 'd') {
  //   return <D />;
  // }

  return <A />;
}
