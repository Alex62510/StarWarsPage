import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const defaultDelay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || defaultDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
};
