import {MainWrapper, MainHeading} from './styles'
import '../Container/CityCompo/CityCompo'
import CityCompo from '../Container/CityCompo/CityCompo';
import { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo/WeatherInfo';
// import WeatherInfo from './WeatherInfo/WeatherInfo';


const API_KEY_FOR_WEATHER_API = "50beab7ed752245b791123d63ede589c";
const Container = () =>{
    const [loacation, setLoaction] = useState();
    const [weather, setWeather] = useState();
    
    const featchweather = async(event) =>{
        event.preventDefault();
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${loacation}&APPID=${API_KEY_FOR_WEATHER_API}&units=metric`);
        console.log(res);
        setWeather(res.data);
    }
    return(
        <>
        <MainWrapper>
            <MainHeading>React Weather App</MainHeading>
            {weather?<WeatherInfo weather={weather}/>:<CityCompo setLoaction={setLoaction} featchweather={featchweather}/>}
        </MainWrapper>
        </>
    )
};

export default Container;