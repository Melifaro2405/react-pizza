import {useState} from "react";

export default function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {items && items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            key={`${item}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            {item}
          </li>))}
      </ul>
    </div>
  );
}
