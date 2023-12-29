const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <h1>Travel To Anywhere</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>List the items needed for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item items={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return (
    <li>
      <span>
        {items.quantity}
        {items.description}
      </span>
      <button>delete</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X Items in your list, and packed X (X%)
    </footer>
  );
}
