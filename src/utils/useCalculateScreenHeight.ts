import { useCallback, useEffect } from 'react';
import useEventListener from '@utils/useEventListener';

const useCalculateScreenHeight = () => {
  const handleResize = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  useEventListener('resize', handleResize, { passive: true, capture: false });

  useEffect(() => {
    handleResize();
  }, []);
};

export default useCalculateScreenHeight;
