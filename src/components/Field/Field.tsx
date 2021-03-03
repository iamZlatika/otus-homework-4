import React from "react";
import Cell from "../Cell";
import "./Field.css";

interface FieldProps {
  field: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Field: React.FC<FieldProps> = ({ field, onClick }) => {
  return (
    <>
      {field.map((row, x) => (
        <div key={x} className="row">
          {row.map((filled, y) => (
            <Cell onClick={() => onClick(x, y)} key={y} filled={filled} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Field;
