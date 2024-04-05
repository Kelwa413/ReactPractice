import { Children, ReactNode } from "react";
import App from "../App";

interface Props {
  children: ReactNode;
  color: "primary" | "secondary" | "success" | "danger";
  onClose: () => void;
}

const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
