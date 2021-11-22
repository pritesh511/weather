import {MainWrapper, MainHeading} from './styles'
import '../Container/CityCompo/CityCompo'
import CityCompo from '../Container/CityCompo/CityCompo';

const Container = () =>{
    return(
        <>
        <MainWrapper>
            <MainHeading>React Weather App</MainHeading>
            <CityCompo/>
        </MainWrapper>
        </>
    )
};

export default Container;