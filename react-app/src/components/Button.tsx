interface BtnProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const button = ({ children, onClick, color = "primary" }: BtnProps) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default button;
