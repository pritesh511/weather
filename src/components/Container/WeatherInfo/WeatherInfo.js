import styled from "styled-components";

const WeatherMain = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;
const WeatherTemp = styled.div`
max-width: 30%;
width: 100%;
padding: 16px;
background-color: antiquewhite;
border-radius: 8px;
display: flex;
flex-direction: column;
`;
const Temp = styled.span`
  font-size: 24px;
`;
const WeatherInfoMain = styled.div`
max-width: 65%;
width: 100%;
background-color: blueviolet;
border-radius: 8px;
`;
const WeatherCity = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const WeatherInfo = (props) => {
  const { weather } = props;
  return (
    <>
      <WeatherMain>
        <WeatherTemp>
          <WeatherCity>{`${weather.name}, ${weather.sys.country}`}</WeatherCity>
          <Temp>{`${weather.main.temp}`}</Temp>
        </WeatherTemp>
        <WeatherInfoMain></WeatherInfoMain>
      </WeatherMain>
    </>
  );
};

export default WeatherInfo;
