import styled from "styled-components";
import Grid from "../Section/grid";

const Wrapper = styled.div`
  margin-top: 0.25rem;
  grid-column: span 2 / span 2;
`;
const Div = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 32rem;
  justify-content: center;
  display: flex;
  border-width: 2px;
  border-style: dashed;
  border-radius: 0.375rem;
  border-color: #e2e8f0;
`;
const TextCenter = styled.div`
  text-align: center;
`;
const SVG = styled.svg`
  width: 3rem;
  color: #cbd5e0;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
`;
const ButtonText = styled.p`
  color: #718096;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`;
const Button = styled.button`
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #5a67d8;
  font-weight: 500;
`;
const ImgFormats = styled.p`
  color: #a0aec0;
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

function CoverPhoto() {
  return (
    <Grid label="CoverPhoto">
      <Wrapper>
        <Div>
          <TextCenter>
            <SVG stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </SVG>
            <ButtonText>
              <Button type="button">Upload a file</Button>
              or drag and drop
            </ButtonText>
            <ImgFormats>PNG, JPG, GIF up to 10MB</ImgFormats>
          </TextCenter>
        </Div>
      </Wrapper>
    </Grid>
  );
}

export default CoverPhoto;
