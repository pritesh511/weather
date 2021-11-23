import { useState } from "react";
import styled from "styled-components";
import cloud from '../../../assets/images/cloud.jpg'

const WeatherImage = styled.img`
width:200px;
height: 200px;
margin-bottom: 15px;
border-radius: 6px;
`;

const WeatherForm = styled.form`
border: 1px solid black;
border-radius: 4px;
overflow: hidden;
input{
    padding: 8px 6px; 
    outline: none;
    border: none;
}
button{
    padding: 8px 8px;
    background-color: #2e69ce;
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;    
}
`;

export {WeatherImage, WeatherForm}
const CityCompo = () =>{
    const [Loacation, setLoaction] = useState("london");
    console.log(Loacation);
    console.log(setLoaction);
    return(
        <>
        <WeatherImage src={cloud}></WeatherImage>
        <WeatherForm>
            <input type='text' placeholder="City Name" onChange={(e)=>{setLoaction(e.target.value)}}></input>
            <button type="submit">Search</button>
        </WeatherForm>
        </>
    )
}

export default CityCompo;