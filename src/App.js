import styled from "styled-components";
import Container from "./components/Container/Container";

const AppWrapper = styled.div`
height: 97vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
`;
const App = ()=> {
  return (
    <AppWrapper>
      <Container/>
    </AppWrapper>
  );
}

export default App;
