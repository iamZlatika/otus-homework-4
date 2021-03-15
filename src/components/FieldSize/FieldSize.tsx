import React from "react";
import styled from "@emotion/styled";

const InputWrapper = styled.input`
  height: 15px;
  width: 40px;
  font-size: 1rem;
`;

interface FieldSizeProps {
  id: string;
  value: number;
  onUpdate: (value: number) => void;
  label: string;
}

const FieldSize: React.FC<FieldSizeProps> = ({ label, id, value, onUpdate }) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <InputWrapper
        type="number"
        id={id}
        onChange={(e) => onUpdate(Number(e.target.value))}
        value={value}
        min="1"
        max="30"
      />
    </>
  );
};

export default FieldSize;
