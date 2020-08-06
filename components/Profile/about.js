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
const Textarea = styled.textarea`
  line-height: 1.25rem;
  font-size: 0.875rem;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  width: 100%;
  display: block;
  resize: vertical;
  overflow: auto;
  margin: 0;
`;

const Styledtext = styled.p`
  color: #a0aec0;
`;

function About() {
  return (
    <Grid label="About">
      <Wrapper>
        <Div>
          <Textarea></Textarea>
        </Div>
        <Styledtext>Write a few sentences about yourself.</Styledtext>
      </Wrapper>
    </Grid>
  );
}

export default About;
