import React from 'react';
import Info from './components/info';
import WeatherInfo from './components/weatherInfo';
import Form from './components/form';

const API_KEY = '63afb147c63b280b52221e98cb823b4c';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();    
    const city = e.target.elements.city.value;      

    
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json(); 
    console.log(data);
    if (data.name != null) {
      let normalTime = (data) => {
        let date = new Date();
        date.setTime(data*1000);
        console.log(data);
        return String(date.getHours()).padStart(2, '0')  + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0') + ' (by your local time)';        
      }

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: normalTime(data.sys.sunrise),
        sunset: normalTime(data.sys.sunset),
        error: ''
      });
    } else {
      this.setState({
        error: 'Incorrect city'
      })
    }

        
  }

  render() {
    return (
      <div>    
        <Info/>
        <Form
           weatherMethod = {this.gettingWeather} 
        />
        <WeatherInfo
          temp = {this.state.temp}
          city = {this.state.city}
          country = {this.state.country}
          sunrise = {this.state.sunrise}
          sunset = {this.state.sunset}
          error = {this.state.error}
        />
        
      </div>
    );
  }
}

export default App;