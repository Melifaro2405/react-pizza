import {Button} from "../components";
import {cart, pizzaLogo} from "../assets";
import {Link} from "react-router-dom";

export default function Header() {
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
              <span>{555} ₽</span>
              <div className="button__delimiter" />
              <img src={cart} alt={cart} />
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
