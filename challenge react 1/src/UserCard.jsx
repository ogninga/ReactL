export function UserCard({ name, phoneNumber, age, address }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Phonenumber :</div>
        <div>{phoneNumber}</div>
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">address:</div>

        <div>{address}</div>
      </div>
    </div>
  );
}
