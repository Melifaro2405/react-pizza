import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [pizzas, setPizzas] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
