import styled from "styled-components";
import location from "../../../assets/images/location.svg";
import cloudy from "../../../assets/images/cloudy.svg";
import wind from "../../../assets/images/wind.svg";

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
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const WeatherCity = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const WeatherLoaction = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const WeatherTempBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainIcon = styled.img`
  height: 120px;
  width: 120px;
`;
const LocationIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;
const WeatherStatus = styled.div`
  padding: 16px;
  margin: 10px;
  width: 100px;
  border-radius: 6px;
  background-color: #2e69ce;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WeatherStatusIcon = styled.img`
  height: 30px;
  width: 30px;
`;
const WeatherStatusText = styled.span`
  display: block;
  color: white;
  margin: 8px 0px;
`;
const WeatherStatusValue = styled.span`
  color: white;
`;

const WeatherInfo = (props) => {
  const { weather } = props;
  return (
    <>
      <WeatherMain>
        <WeatherTemp>
          <WeatherLoaction>
            <LocationIcon src={location}></LocationIcon>
            <WeatherCity>{`${weather?.name}, ${weather?.sys?.country}`}</WeatherCity>
          </WeatherLoaction>
          <WeatherTempBlock>
            <MainIcon src={cloudy}></MainIcon>
            <Temp>{`${weather?.main?.temp}`} C</Temp>
          </WeatherTempBlock>
        </WeatherTemp>
        <WeatherInfoMain>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>humiidty</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.main?.humidity}`}</WeatherStatusValue>
          </WeatherStatus>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>pressure</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.main?.pressure}`}</WeatherStatusValue>
          </WeatherStatus>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>clouds</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.clouds?.all}`}</WeatherStatusValue>
          </WeatherStatus>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>visibility</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.visibility}`}</WeatherStatusValue>
          </WeatherStatus>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>main</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.weather[0]?.main}`}</WeatherStatusValue>
          </WeatherStatus>
          <WeatherStatus>
            <WeatherStatusIcon src={wind}></WeatherStatusIcon>
            <WeatherStatusText>wind</WeatherStatusText>
            <WeatherStatusValue>{`${weather?.wind?.speed}`}</WeatherStatusValue>
          </WeatherStatus>
        </WeatherInfoMain>
      </WeatherMain>
    </>
  );
};

export default WeatherInfo;
