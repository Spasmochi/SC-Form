import styled from "styled-components";
import Label from "./label";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: flex-start;
  padding-top: 1.25rem;
  grid-gap: 1rem;
  gap: 1rem;
  border-top-width: 1px;
  border-color: #edf2f7;
  @media (max-width: 768px) {
    display: block;
  }
`;

function grid(props) {
  return (
    <Div>
      <Label label={props.label} />
      {props.children}
    </Div>
  );
}

export default grid;
