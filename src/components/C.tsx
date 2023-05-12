import { useRouter } from 'next/router';
import { useState } from 'react';

export function C() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div
        onClick={() => setSelected(1)}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selected === 1 ? '#ff0' : '#0ff',
        }}
      >
        1
      </div>
      <div
        onClick={() => setSelected(2)}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selected === 2 ? '#ff0' : '#00f',
        }}
      >
        2
      </div>
      <div
        onClick={() => setSelected(3)}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selected === 3 ? '#ff0' : '#0ff',
        }}
      >
        3
      </div>
      <div
        onClick={() => setSelected(4)}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selected === 4 ? '#ff0' : '#00f',
        }}
      >
        4
      </div>
      <div
        onClick={() => setSelected(5)}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selected === 5 ? '#ff0' : '#0ff',
        }}
      >
        5
      </div>
      <button onClick={() => router.push('?f=d')}>C</button>
    </>
  );
}
