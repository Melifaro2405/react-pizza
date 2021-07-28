import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import ContentLoader from "react-content-loader";

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="142" r="115" />
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
  );
}

export default function Home() {
  const dispatch = useDispatch();
  const {items, loading} = useSelector(({pizzas}) => pizzas);
  const {category, sortBy} = useSelector(({filters}) => filters);

  const onSelectCategory = useCallback(((index) => {
    dispatch(setCategory(index));
  }), [dispatch]);

  const onSelectSortType = useCallback(((type) => {
    dispatch(setSortBy(type));
  }), [dispatch]);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, sortBy, category]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
          : items.map(({id, ...item}) => <PizzaBlock key={id} {...item}/>)}
      </div>
    </div>
  );
}