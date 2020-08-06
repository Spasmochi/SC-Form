import styled from "styled-components";

const Text = styled.p`
  padding-top: 0.5rem;
  margin-top: 1px;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: 500;
`;

function label(props) {
  return <Text>{props.label}</Text>;
}

export default label;
