import React, { useCallback, useRef } from 'react';
import * as PropTypes from 'prop-types';
import { useParallaxY } from '../../../../../hooks/parallax';
import style from '../../Page.module.css';

const offsetTop = elementRef => elementRef.current
  && (
    elementRef.current.offsetTop
    || elementRef.current.offsetParent.offsetTop
  );
const SideContent = ({ children }) => {
  const el = useRef();
  const elOffsetTop = useCallback(() => offsetTop(el), [el]);
  const elParallaxY = useParallaxY(elOffsetTop, 0.35);
  return (
    <div
      ref={el}
      className={style.SideContent}
      style={{
        transform: `translateY(${-elParallaxY}px)`,
      }}
    >
      {children}
    </div>
  );
};

SideContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideContent;
