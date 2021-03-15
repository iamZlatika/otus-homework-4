import React from "react";
import Cell from "../Cell";
import styled from "@emotion/styled";

interface FieldProps {
  field: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Row = styled.div`
  display: flex;
`;
const Field: React.FC<FieldProps> = ({ field, onClick }) => {
  return (
    <>
      {field.map((row, x) => (
        <Row key={x}>
          {row.map((filled, y) => (
            <Cell onClick={() => onClick(x, y)} key={y} filled={filled} />
          ))}
        </Row>
      ))}
    </>
  );
};

export default Field;
