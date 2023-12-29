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
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style} className="header">
        {" "}
        Fast React Pizza Co.{" "}
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;

  return (
    <>
      <main className="menu">
        <h2> Our Menu</h2>

        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
                //   name={pizza.name}
                //   ingredients={pizza.ingredients}
                //   price={pizza.price}
                //   photoName={pizza.photoName}
                //   soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        ) : (
          <p>Working on menu please come back later.</p>
        )}

        {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mushrooms"
          price={12}
          photoName="pizzas/funghi.jpg"
        /> */}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  console.log();

  if (pizzaObj.soldOut) return null;

  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("we open come get a slice");
  //   else alert("we closed on up.");

  //   hour < 2 ? alert("we closed son!") : alert("we opened son!");

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>We are currently closed for the night we open at {openHour}</p>
        )}
      </footer>
    </>
  );

  //   React.createElement("footer", null, "We are open!");
}
// can define anything in the destructuring function, even if it means nothing.
function Order({ closeHour, openHour }) {
  return (
    <>
      <div className="order">
        <p>
          We are open from {openHour}:00 until {closeHour}:00. Visit us now or
          order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
