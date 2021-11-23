import styled from "styled-components";

const MainWrapper = styled.div`
max-width: 400px;
width:100%;
display:flex;
flex-direction:column;
align-items: center;
background-color: #ffffff;
padding: 20px 10px;
border-radius: 4px;
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.10);
`;
const MainHeading = styled.h1`
font-size: 18px;
line-height: 20px;
margin-bottom: 15px;
`;

export {MainWrapper, MainHeading}