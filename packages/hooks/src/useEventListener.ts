import { useEffect, useRef } from "react";

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window | null
): void;

export function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: T
): void;

export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: HTMLElement | Window | null = typeof window !== "undefined"
    ? window
    : null
) {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element?.addEventListener) return;

    const eventListener = (event: Event) => {
      if (!!savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
