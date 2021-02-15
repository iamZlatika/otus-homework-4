import React from "react";
import Cell from "../Cell/Cell";
import "./Field.css";

interface FieldProps {
  field: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Field: React.FC<FieldProps> = ({ field, onClick }) => {
  return (
    <>
      {field.map((row, height) => (
        <div key={height} className="row">
          {row.map((filled, width) => (
            <Cell onClick={() => onClick(height, width)} key={width} filled={filled} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Field;
