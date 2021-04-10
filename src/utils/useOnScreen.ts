import { useState, useEffect, useRef, useCallback, RefObject } from 'react';

interface Args<T> extends IntersectionObserverInit {
  elementRef: RefObject<T>;
  repeatable?: boolean;
}

type ReturnType = [boolean, IntersectionObserverEntry | undefined];

const useOnScreen = <T extends HTMLElement = HTMLDivElement>({
  elementRef,
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  repeatable = false,
}: Args<T>): ReturnType => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isClient = typeof window !== `undefined`;
  const isSupported = isClient && 'IntersectionObserver' in window;
  const singleAnimaton = entry?.isIntersecting && !repeatable;
  const [isIntersecting, setIntersecting] = useState(!isSupported);

  const updateEntry = useCallback(
    ([newEntry]: IntersectionObserverEntry[]): void => {
      setEntry(newEntry);
    },
    [],
  );

  useEffect(() => {
    if (!isSupported || singleAnimaton || !elementRef?.current) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });

    const { current: currentObserver } = observer;

    currentObserver.observe(elementRef.current);

    return (): void => {
      currentObserver.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, singleAnimaton]);

  useEffect(() => {
    if (!isIntersecting && !!entry?.isIntersecting) {
      setIntersecting(true);
    }
  }, [entry]);

  return [!!entry?.isIntersecting, entry];
};

export default useOnScreen;
