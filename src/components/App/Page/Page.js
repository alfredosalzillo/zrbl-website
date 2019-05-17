import React from 'react';
import * as PropTypes from 'prop-types';
import style from './Page.module.css';

const Page = ({ children }) => (
  <div className={style.Root}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
