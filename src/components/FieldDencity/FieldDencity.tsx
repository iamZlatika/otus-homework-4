import React from "react";
import styled from "@emotion/styled";

const InputWrapper = styled.input`
  height: 15px;
  width: 200px;
  font-size: 1rem;
  cursor: pointer;
`;

interface FieldDencityProps {
  id: string;
  value: number;
  onUpdate: (value: number) => void;
  label: string;
}

const FieldDencity: React.FC<FieldDencityProps> = ({ label, id, value, onUpdate }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputWrapper
        type="range"
        id={id}
        onChange={(e) => onUpdate(Number(e.target.value))}
        value={value}
        min="0"
        max="100"
      />
    </>
  );
};

export default FieldDencity;
