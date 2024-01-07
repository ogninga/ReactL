import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProp) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
