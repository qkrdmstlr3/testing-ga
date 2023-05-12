import { useRouter } from 'next/router';

export function A() {
  const router = useRouter();

  return <button onClick={() => router.push('?f=b')}>A</button>;
}
