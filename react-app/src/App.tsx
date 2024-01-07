import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  // return (
  // //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
  //     )}
  //     <Button color="danger" onClick={() => setAlertVisible(true)}>
  //       My Button
  //     </Button>
  //   </div>
  // );

  // return (
  //   <div>
  //     Hello World</Alert>
  //   </div><Alert>
  // );

  const items = ["london", "detroit", "greece", "rome", "atlanta", "paraguay"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
}
export default App;
