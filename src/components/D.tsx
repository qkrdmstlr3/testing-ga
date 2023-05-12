import { useRouter } from 'next/router';

export function D() {
  const router = useRouter();

  return <button onClick={() => router.push('/')}>D</button>;
}
