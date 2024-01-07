import { MouseEvent } from "react";

function ListGroup() {
  const items = ["london", "detroit", "greece", "rome", "atlanta", "paraguay"];

  const getMessage = () => {
    return items.length === 0 && <p> No items Found</p>;
  };
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li onClick={handleClick} key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
