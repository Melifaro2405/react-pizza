import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {cart, pizzaLogo} from "../assets";
import {Button} from "../components";

export default function Header() {
  const {totalPrice, totalCount} = useSelector(({cart}) => cart)

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo"/>
            <div>
              <h1>React Pizza</h1>
              <p>Самая вкусная пицца во вселенной!</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter" />
              <img src={cart} alt={cart} />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
