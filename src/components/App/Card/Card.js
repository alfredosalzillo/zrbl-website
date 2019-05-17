import React, {
  Fragment, useEffect, useMemo, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import * as PropTypes from 'prop-types';
import style from './Card.module.css';
import Button from './Button/Button';

const CardExpanded = ({
  anchorTo,
  heading,
  pictures,
  onExpand = null,
  onExpanded = null,
}) => {
  useEffect(() => {
    if (onExpand) {
      // notifico l'inizio dell'espansione della Card
      onExpand();
    }
  });
  const portalNode = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    const {
      top,
      left,
      width,
    } = anchorTo.getBoundingClientRect();
    // essendo il componente creato all'interno di un Portal,
    // non eredita la positione della @Card
    // è necessario ancorarlo alla Card (aka anchorTo) affinche le animazioni
    // partano dalla Card corretta
    portalNode.style.position = 'fixed';
    portalNode.style.top = `${top}px`;
    portalNode.style.right = `calc(100vw - ${left + width}px)`;
    portalNode.style.zIndex = '100';
    portalNode.style.borderRadius = anchorTo.style.borderRadius;
    document.body.append(portalNode);
    return () => {
      document.body.removeChild(portalNode);
    };
  }, [anchorTo, portalNode]);
  // la card estesa deve essere inserita all'interno di un div esterno in quanto
  // se utilizzata all'interno di elementi con translation css attive
  // non è possibile utilizzare la position: fixed
  // oltre ad avere tutti i vantaggi di un popup
  return createPortal(
    <div
      className={style.ExpandedRoot}
    >
      <div className={style.ExpandedCard}>
        <div className={style.ExpandedContent}>
          <div>
            <div
              className={style.Heading}
              onAnimationEnd={
                // l'Heading è l'ultimo elemento che completa l'animazione di espansione
                // notifico la fine delle animazioni di espansione
                onExpanded
              }
            >
              {heading}
            </div>
          </div>
          <div className={style.CameraRoll}>
            <div>
              { pictures && pictures.map(picture => (
                <img
                  key={picture}
                  src={picture}
                  alt="camera roll p"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalNode,
  );
};

CardExpanded.propTypes = {
  anchorTo: PropTypes.instanceOf(HTMLElement).isRequired,
  heading: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  onExpand: PropTypes.func,
  onExpanded: PropTypes.func,
};

const Card = ({
  backgroundText = '01',
  icon = null,
  heading = null,
  subHeading = null,
  pictures = null,
  enableExpand = false,
  expandButtonText = 'expand',
  // callback di notifica dell'inizio dell'espansione della Card
  onExpand = null,
  // callback di notifica della fine dell'espansione della Card
  onExpanded = null,
}) => {
  const cardEl = useRef();
  const [expand, setExpand] = useState(false);
  const Icon = icon && (
    <div>
      <img src={icon} alt="icon" />
    </div>
  );
  const Heading = heading && (
    <div className={style.Heading}>
      {heading}
    </div>
  );
  const SubHeading = subHeading && (
    <div className={style.SubHeading}>
      {heading}
    </div>
  );
  const ExpansionButton = enableExpand && (
    <Button
      text={expandButtonText}
      onClick={() => setExpand(true)}
    />
  );
  return (
    <Fragment>
      <div ref={cardEl} className={style.Root}>
        <div className={style.Content}>
          <div className={style.BackgroundText}>
            {backgroundText}
          </div>
          { Icon }
          { SubHeading }
          { Heading }
          { ExpansionButton }
        </div>
      </div>
      { expand && (
      <CardExpanded
        anchorTo={cardEl.current}
        heading={heading}
        pictures={pictures}
        onExpand={onExpand}
        onExpanded={onExpanded}
      />
      )}
    </Fragment>
  );
};

Card.propTypes = {
  backgroundText: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string),
  enableExpand: PropTypes.bool,
  expandButtonText: PropTypes.string,
  onExpand: PropTypes.func,
  onExpanded: PropTypes.func,
};

export default Card;
