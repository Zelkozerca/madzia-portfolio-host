import { useSpring } from 'react-spring';
import { RefObject, useEffect } from 'react';
import useOnScreen from '@utils/useOnScreen';

export const useAnimateBackground = (
  ref: RefObject<HTMLDivElement>,
  { dx, dy, delay }: { dx: number; dy: number; delay?: number },
): any => {
  const [isVisible] = useOnScreen<HTMLDivElement>({
    elementRef: ref,
    threshold: 0.5,
  });

  const [{ x, y }, animate] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  useEffect(() => {
    if (isVisible) {
      animate({
        x: dx,
        y: dy,
        delay: delay || 0,
      });
    }
  }, [isVisible]);

  return {
    x,
    y,
  };
};
