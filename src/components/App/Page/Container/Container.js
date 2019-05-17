import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { useScrolledOne, useScrollValue } from '../../../../hooks/scroll';
import { useParallaxY } from '../../../../hooks/parallax';
import style from '../Page.module.css';

const offsetTop = elementRef => elementRef.current
  && (
    elementRef.current.offsetTop
    || elementRef.current.offsetParent.offsetTop
  );

const Container = ({
  children,
}) => {
  const wrapperEl = useRef();
  const wrapperOffsetTop = useCallback(() => offsetTop(wrapperEl), [wrapperEl]);
  const isScrolledAfterWrapper = useCallback(
    () => window.scrollY >= wrapperOffsetTop() - 40,
    [wrapperOffsetTop],
  );
  const expandWrapper = useScrollValue(isScrolledAfterWrapper);
  const wrapperParallaxY = useParallaxY(wrapperOffsetTop, 0.1);
  const animate = useScrolledOne();
  const wrapperClasses = classNames(style.Wrapper, {
    [style.Expanded]: expandWrapper,
    // l'animazione deve essere abilitata solo dopo il primo scroll,
    // per evitare che ricaricando la pagina, trovandosi già scrollati, si veda l'animazione
    [style.Animated]: animate,
  });
  return (
    <div
      ref={wrapperEl}
      className={wrapperClasses}
      style={{
        transform: `translateY(${-(40 - wrapperParallaxY)}px)`,
      }}
    >
      <div className={style.Container}>
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
