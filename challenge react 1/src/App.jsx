import { UserCard } from "./UserCard";
import user from "./user.json";

function App() {
  return (
    <>
      <UserCard
        name="Eman"
        phoneNumber={8675309}
        age={17}
        //can pass values below with a json.
        address={user.address}
      />
    </>
  );
}

export default App;
