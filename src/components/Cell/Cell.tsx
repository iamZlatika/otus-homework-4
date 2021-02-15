import React from "react";
import "./Cell.css";

interface CellProps {
  filled?: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ filled, onClick }) => {
  return <div className={`cell ${filled ? "filled" : ""}`} onClick={onClick}></div>;
};

export default Cell;
