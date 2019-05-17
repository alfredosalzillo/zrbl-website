import { useCallback } from 'react';
import { useScrollValue } from './scroll';

/**
 * custom hook
 * @param {function():number} offsetTop
 *    funzione che ritorna l'offset attuale dell'elemento in parallasse
 * @param ratio la ratio da utilizzare per il calcolo
 * @return number lo spostamento 'y' dell'elemento usato in 'offsetTop' sopraelevato di 'ratio'
 * */
export const useParallaxY = (offsetTop, ratio) => {
  const calcParallaxY = useCallback(
    () => Math.max(0, (offsetTop() - window.scrollY) * ratio),
    [offsetTop, ratio],
  );
  return useScrollValue(calcParallaxY);
};
