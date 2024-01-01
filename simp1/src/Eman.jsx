export function Eman({ name, number, style, pet = "no pet", children }) {
  return (
    <>
      <h1>I am baloon {name}</h1>
      <h2>
        I have {number} smokey {style} I have {pet}
        the child of the components are {children}
      </h2>
    </>
  );
}
