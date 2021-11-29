import styled from "styled-components";
import TempImage from '../../../assets/images/cloud.jpg'
import WeatherInfoImage from '../../../assets/images/cloud.jpg'

const WeatherTemp = styled.div`
display: flex;
align-items: center;
width: 200px;
justify-content: space-between;
padding: 0px 12px;
margin-bottom: 20px; 
`;
const Temp = styled.span`
font-size: 24px;
`;
const TempImg = styled.img`
height: 100px;
width: 100px;
border-radius: 4px;
`;

const WeatherCity = styled.span`
font-size: 24px;
font-weight: 500;
margin-bottom: 20px;
`;

const WeatherInfoText = styled.span`
width: 100%;
text-align: left;
font-size: 14px;
font-weight: 700;
margin-bottom: 12px;
`;

const WeatherInfoWrap = styled.div`
width:100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
const WeatherBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;    
width: 50%;
margin-bottom: 10px;
`;
const WeatherInfoImg = styled.img`
height: 40px;
width: 40px;
border-radius: 6px;
`;
const WeatherInfoContent = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`;
const WeatherText = styled.span`
font-size: 16px;
line-height: 16px;  
`;
const Condition = styled.span`
font-size: 16px;
line-height: 16px;
`;
export {WeatherText, Condition,  WeatherTemp, Temp, TempImg, WeatherCity, WeatherInfoText, WeatherInfoWrap, WeatherBlock, WeatherInfoImg, WeatherInfoContent}
const WeatherInfo = (props) => {
    const {weather} = props;
    return(
        <>
        <WeatherTemp>
            <Temp>{`${weather.main.temp}`}</Temp>
            <TempImg src={TempImage}></TempImg>
        </WeatherTemp>
        <WeatherCity>{`${weather.name}, ${weather.sys.country}`}</WeatherCity>
        <WeatherInfoText>Weather Info</WeatherInfoText>
        <WeatherInfoWrap>
            <WeatherBlock>
                <WeatherInfoImg src={WeatherInfoImage}></WeatherInfoImg>
                <WeatherInfoContent>
                    <Condition>1:50</Condition>
                    <WeatherText>Sunset</WeatherText>
                </WeatherInfoContent>
            </WeatherBlock>
            <WeatherBlock>
                <WeatherInfoImg src={WeatherInfoImage}></WeatherInfoImg>
                <WeatherInfoContent>
                    <Condition>1:50</Condition>
                    <WeatherText>Sunset</WeatherText>
                </WeatherInfoContent>
            </WeatherBlock>
            <WeatherBlock>
                <WeatherInfoImg src={WeatherInfoImage}></WeatherInfoImg>
                <WeatherInfoContent>
                    <Condition>1:50</Condition>
                    <WeatherText>Sunset</WeatherText>
                </WeatherInfoContent>
            </WeatherBlock>
            <WeatherBlock>
                <WeatherInfoImg src={WeatherInfoImage}></WeatherInfoImg>
                <WeatherInfoContent>
                    <Condition>1:50</Condition>
                    <WeatherText>Sunset</WeatherText>
                </WeatherInfoContent>
            </WeatherBlock>
        </WeatherInfoWrap>
        </>
    )
} 

export default WeatherInfo;