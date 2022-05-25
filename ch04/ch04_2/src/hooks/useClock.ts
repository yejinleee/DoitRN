// App.tsx에서 구현했던 시계 컴포넌트를 커스텀 훅으로 분리해봅시다

import {useEffect, useState} from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};
