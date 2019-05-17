import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import style from './Header.module.css';
import { useScrolledMoreThan } from '../../../../hooks/scroll';

const Header = ({ title }) => {
  const isAbsolute = useScrolledMoreThan(330);
  const absoluteStyle = useMemo(() => (isAbsolute
    ? {
      position: 'absolute',
      top: 330,
    }
    : {}), [isAbsolute]);
  return (
    <div className={style.Root} style={absoluteStyle}>
      <span className={style.Title}>{title}</span>
      <div className={style.Menu}>
        <a className={style.MenuItem} href="#lorem">LOREM</a>
        <a className={style.MenuItem} href="#ipsum">IPSUM</a>
        <a className={style.MenuItem} href="#doler">DOLER</a>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
