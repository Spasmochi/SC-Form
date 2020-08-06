import styled from "styled-components";

const H3 = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #1a202c;
`;
const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  max-width: 42rem;
  color: #a0aec0;
`;

function Header(props) {
  return (
    <div>
      <H3>{props.title}</H3>
      <Text>{props.sub}</Text>
    </div>
  );
}

export default Header;
