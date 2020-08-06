import styled from "styled-components";

const Styledwrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
`;
const Styleddiv = styled.div`
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({ children }) => {
  return (
    <Styledwrapper>
      <Styleddiv>
        <form>{children}</form>
      </Styleddiv>
    </Styledwrapper>
  );
};

export default Layout;
