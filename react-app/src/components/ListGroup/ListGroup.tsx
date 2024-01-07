// import { MouseEvent } from "react";
// import styles from "./ListGroup.module.css";

import { useState } from "react";

import { List, ListItem } from "./ListGroupStyles";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let selectedIndex = 0;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [name, setName] = useState('')

  const getMessage = () => {
    return items.length === 0 && <p> No items Found</p>;
  };

  //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
