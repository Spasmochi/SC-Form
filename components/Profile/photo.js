import styled from "styled-components";
import Grid from "../Section/grid";

const Wrapper = styled.div`
  margin-top: 0.25rem;
  grid-column: span 2 / span 2;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: #f7fafc;
`;
const ButtonSpan = styled.span`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-left: 1.25rem;
  border-radius: 0.375rem;
`;
const Button = styled.button`
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #4a5568;
  color: rgba(74, 85, 104, 1);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-width: 1px;
  border-radius: 0.375rem;
  border-style: solid;
  border-color: #e2e8f0;
  border-color: rgba(226, 232, 240, 1);
  background-color: transparent;
  background-image: none;
  text-transform: none;
  margin: 0;
  &:focus {
    outline: 0;
    border-color: #90cdf4;
    text-decoration: none;
  }
`;
const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

function Photo() {
  return (
    <Grid label="Photo">
      <Wrapper>
        <Div>
          <Span>
            <SVG fill="#e2e8f0" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </SVG>
          </Span>
          <ButtonSpan>
            <Button>Change</Button>
          </ButtonSpan>
        </Div>
      </Wrapper>
    </Grid>
  );
}

export default Photo;
