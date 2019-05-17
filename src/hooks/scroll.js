import {
  useState, useEffect, useCallback, useLayoutEffect,
} from 'react';


/**
 * custom hook per calcolare valori che dipendono dallo scroll
 * @template T
 * @param {function(Event):T} map la funzione che viene applicata all'evento i scroll
 * @return {T}
 * */
export const useScrollValue = (map) => {
  const [value, setValue] = useState(null);
  const evaluate = useCallback(e => setValue(map(e)), [setValue, map]);
  useEffect(() => {
    window.addEventListener('scroll', evaluate);
    return () => window.removeEventListener('scroll', evaluate);
  }, [evaluate]);
  useLayoutEffect(() => {
    // 'evaluate' deve essere valutato a termine caricamento pagina
    // per ottenere il giusto risultato prima del primo scroll
    document.addEventListener('DOMContentLoaded', evaluate);
  }, [evaluate]);
  return value;
};

/**
 * custom hook per verificare se scrollY > value
 * @param {number} value
 * @return {boolean}
 * */
export const useScrolledMoreThan = (value) => {
  const isScrolledEnough = useCallback(() => window.scrollY > value, [value]);
  return useScrollValue(isScrolledEnough);
};


/**
 * custom hook per sapere se è avvenuta la prima scroll
 * use case: per evitare le animazioni prima della prima scroll
 * @return {boolean} true se è avvenuta la prima scroll
 * */
export const useScrolledOne = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const setScrolledToTrue = () => setScrolled(true);
    window.addEventListener('scroll', setScrolledToTrue, {
      once: true,
    });
    return () => window.removeEventListener('scroll', setScrolledToTrue);
  }, [setScrolled]);
  return scrolled;
};
