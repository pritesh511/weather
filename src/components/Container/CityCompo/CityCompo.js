import styled from "styled-components";

const WeatherImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  border-radius: 6px;
`;
const CityMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WeatherForm = styled.form`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
  input {
    max-width: 500px;
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    outline: none;
    border: none;
  }
  button {
    padding: 12px 16px;
    margin-left: 10px;
    background-color: #2e69ce;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #ffffff;
    cursor: pointer;
  }
`;

export { WeatherImage, WeatherForm };
const CityCompo = (props) => {
  const { setLoaction, featchweather } = props;
  return (
    <>
      <CityMain>
        <WeatherForm onSubmit={featchweather}>
          <input
            type="text"
            placeholder="City Name"
            onChange={(e) => {
              setLoaction(e.target.value);
            }}
          ></input>
          <button type="submit">Search</button>
        </WeatherForm>
      </CityMain>
    </>
  );
};

export default CityCompo;
