import React from 'react';
import * as PropTypes from 'prop-types';
import style from '../../Page.module.css';

const Content = ({ children }) => (
  <div className={style.Content}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
