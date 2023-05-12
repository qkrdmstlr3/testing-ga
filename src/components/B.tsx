import { useRouter } from 'next/router';

export function B() {
  const router = useRouter();

  return <button onClick={() => router.push('?f=c')}>B</button>;
}
