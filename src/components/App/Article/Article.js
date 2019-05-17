import React from 'react';
import * as PropTypes from 'prop-types';
import style from './Article.module.css';

const AuthorInfo = ({
  image,
  displayName,
}) => (
  <div className={style.AuthorInfo}>
    <img src={image} alt="author profile pics" />
    <span>{displayName}</span>
  </div>
);

AuthorInfo.propTypes = {
  image: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

const ArticleInfo = ({
  author,
  icons,
}) => (
  <div className={style.ArticleInfo}>
    <AuthorInfo {...author} />
    <div className={style.Actions}>
      {icons && icons.map(icon => (
        <img
          key={icon}
          src={icon}
          alt={icon}
        />
      ))}
    </div>
  </div>
);

ArticleInfo.propTypes = {
  author: PropTypes.shape(AuthorInfo.propTypes).isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Article = ({
  subHeading,
  heading,
  text,
  author,
  gallery,
  actions,
}) => (
  <div className={style.Root}>
    <div className={style.SubHeading}>{subHeading}</div>
    <div className={style.Heading}>{heading}</div>
    <div className={style.Text}>{text}</div>
    <div className={style.Divider} />
    <ArticleInfo
      author={author}
      icons={actions}
    />
    <div className={style.Gallery}>
      {gallery && gallery.map(image => (
        <img
          key={image}
          src={image}
          alt="gallery"
        />
      ))}
    </div>
  </div>
);

Article.propTypes = {
  subHeading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.shape(AuthorInfo.propTypes).isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.arrayOf(PropTypes.string),
};

export default Article;
