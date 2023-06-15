import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = {
  //     color: "#e03131",
  //     fontStyle: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};
  return (
    <div className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            stove oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>`We're working on our menu. Please come back later😊`</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={12}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>

        <p>{pizzaObj.ingredients}</p>

        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>${pizzaObj.price}</span>
        )}

        {/* <span>{pizzaObj.soldOut ? `SOLD OUT` : pizzaObj.price}</span> */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen =
    hour >= openHour && hour <= closeHour
      ? `We're currently open!!`
      : `We're happy to serve you between ${openHour}:00 to ${closeHour}:00`;
  console.log(isOpen);
  //   hour >= openHour && hour <= closeHour
  //     ? alert(`We're Open`)
  //     : alert(`Sorry!We're Closed`);

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().toLocaleTimeString()}. {isOpen}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
  //   return React.createElement("Footer", null, "We're currently open!");
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
// React.render(<App />, document.getElementById("root"));
