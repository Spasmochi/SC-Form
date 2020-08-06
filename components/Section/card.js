import styled from "styled-components";
import Header from "./header";

const Div = styled.div`
  margin-top: 1.5rem;
`;

function card(props) {
  return (
    <Div>
      <Header title={props.title} sub={props.sub} />
      {props.children}
    </Div>
  );
}

export default card;
