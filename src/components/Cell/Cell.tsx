import React from "react";
import styled from "@emotion/styled";

interface CellProps {
  filled?: boolean;
  onClick: () => void;
}
const CellWrapper = styled.div<Pick<CellProps, "filled">>`
  width: 20px;
  height: 20px;
  border: solid #276678;
  margin: 2px;
  transition: all 0.2s ease-in;
  background: ${(props) => (props.filled ? "#1687a7" : "#fff")};
`;

const Cell: React.FC<CellProps> = ({ filled, onClick }) => {
  return <CellWrapper filled={filled} onClick={onClick} />;
};

export default Cell;
