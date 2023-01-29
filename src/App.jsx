import { useState } from 'react';
import { fetchWeather } from './api';
import { WeatherCard } from './Components/WeatherCard';


export const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange =  (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      console.log(weather);
      setWeather(weather);
    } catch (error) {
      setError('Ciudad no Encontrada');
    }
  }




  return (
    
    <>
    <div className='App'>
    <h1 className='app_heading'>Clima App</h1>
<form onSubmit={ handleSubmit }>
  <input 
  type="text"
   placerholder="Escriba la ciudad"
   value={ city }
   onChange= { handleChange }
   />
   <button type='submit'>Buscar</button>
</form>
{
  error ?(
    <p className='error'>(error)</p>
  ):(
    <WeatherCard weather={weather} />
  )
}
    </div>

    </>
  );

}
