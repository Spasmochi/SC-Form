import styled from "styled-components";
import Grid from "../Section/grid";

const Wrapper = styled.div`
  margin-top: 0.25rem;
  grid-column: span 2 / span 2;
`;
const Div = styled.div`
  display: flex;
  max-width: 32rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
const Span = styled.span`
  display: inline-flex;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  align-items: center;
  color: #a0aec0;
  border: 1px solid #e2e8f0;
  border-right-width: 0px;
  background-color: #fff;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
`;
const Input = styled.input`
  appearance: none;
  background-color: #fff;
  border-color: #d2d6dc;
  border-width: 1px;
  border-radius: 0.375rem;
  border-style: solid;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  flex: 1 1 0%;
  width: 100%;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

function Username() {
  return (
    <Grid label="Username">
      <Wrapper>
        <Div>
          <Span>servicenow.com/</Span>
          <Input id="username" />
        </Div>
      </Wrapper>
    </Grid>
  );
}

export default Username;
