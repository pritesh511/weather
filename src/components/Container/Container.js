import {MainWrapper, MainHeading} from './styles'
import '../Container/CityCompo/CityCompo'
import CityCompo from '../Container/CityCompo/CityCompo';
// import WeatherInfo from './WeatherInfo/WeatherInfo';

const Container = () =>{
    return(
        <>
        <MainWrapper>
            <MainHeading>React Weather App</MainHeading>
            <CityCompo/>
            {/* <WeatherInfo/> */}
        </MainWrapper>
        </>
    )
};

export default Container;