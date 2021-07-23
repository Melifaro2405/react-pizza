import {Categories, PizzaBlock, SortPopup} from "../components";

export default function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(({id, ...item}) => <PizzaBlock key={id} {...item} />)}
      </div>
    </div>
  );
}