import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {arrowTop} from "../assets";

const SortPopup = React.memo(({items, activeSortType, onClickSortType}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel = items.find((item) => item.type === activeSortType).name;

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  };

  const handleOutsideClick = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (type) => {
    onClickSortType(type);
    setVisiblePopup(false);
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <img className={visiblePopup ? 'rotated' : ''} src={arrowTop} alt="arrowTop"/>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items && items.map((obj, index) => (
              <li
                key={`${obj.type}_${index}`}
                className={activeSortType === obj.type ? 'active' : ''}
                onClick={() => onSelectItem(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired
};

SortPopup.defaultProps = {
  items: []
};