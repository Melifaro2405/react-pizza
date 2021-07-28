import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {

  const onSelectItem = (index) => {
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            key={`${item}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            {item}
          </li>))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaulProps = {
  activeCategory: 0,
  items: []
};

export default Categories;