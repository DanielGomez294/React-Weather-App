import axios from "axios";


export const fetchWeather = async (city, setError) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed057cbf9b4183cbfb1123c303ad3f81`;
            try {
                const response = await axios.get(url);
                setError("");
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log("errorsaso")
                setError('Ciudad no encontrada!');
            }

}
