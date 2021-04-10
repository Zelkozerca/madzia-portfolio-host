import { useRef, useEffect, RefObject } from 'react';

const useEventListener = <T extends HTMLElement = HTMLDivElement>(
  eventName: keyof HTMLElementEventMap,
  // eslint-disable-next-line @typescript-eslint/ban-types
  handler: Function,
  options: AddEventListenerOptions = {},
  element?: RefObject<T>,
): void => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const savedHandlerRef = useRef<Function>(null);

  useEffect(() => {
    const targetElement: T | Window = element?.current || window;

    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    if (savedHandlerRef.current !== handler) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      savedHandlerRef.current = handler;
    }

    const eventListener = (event: Event): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      savedHandlerRef?.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, options);

    return (): void =>
      targetElement.removeEventListener(eventName, eventListener);
  }, [eventName, element, handler]);
};
export default useEventListener;
