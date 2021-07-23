import {arrowTop} from "../assets";
import {useEffect, useRef, useState} from "react";

export default function SortPopup({items}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  };

  const handleOutsideClick = (evt) => {
    if (!evt.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    setActiveItem(index);
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
            {items.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}