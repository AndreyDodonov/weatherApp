import React from 'react';
import Info from './components/info';
import WeatherInfo from './components/weatherInfo';
import Form from './components/form';
import Footer from './components/footer';

const API_KEY = '63afb147c63b280b52221e98cb823b4c';

class App extends React.Component {

  state = {
    temp:    null,
    city:    null,
    country: null,
    sunrise: null,
    sunset:  null,
    pressure:null,
    error:   null
  }

  gettingWeather = async (e) => {
    e.preventDefault();    
    const city = e.target.elements.city.value;      

    // TODO: locale time ( date.toLocaleTimeString() ); add .then for fetch 
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    if (data.name != null) {
      // translate time from timestamp
      let normalTime = (data) => {
        let date = new Date();
        date.setTime(data*1000);
        return String(date.getHours()).padStart(2, '0')  + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0') + ' (by your local time)';        
      }

      // translate pressure from hPa into mmHg
      let getMmHg = (data) => {
        return data*0.75 + 'mmHg'
      }

      this.setState({
        temp: Math.ceil(data.main.temp),
        city: data.name,
        country: data.sys.country,
        sunrise: normalTime(data.sys.sunrise),
        sunset: normalTime(data.sys.sunset),
        pressure: getMmHg(data.main.pressure),
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
      <div className="wrapper"> 
        <div className="container">
          <header>
            <Info/>
          </header>
          <main>
          <Form
             weatherMethod = {this.gettingWeather} 
          />
          <WeatherInfo
            temp = {this.state.temp}
            city = {this.state.city}
            country = {this.state.country}
            sunrise = {this.state.sunrise}
            sunset = {this.state.sunset}
            pressure = {this.state.pressure}
            error = {this.state.error}
          />  
          </main>
          <footer>
            <Footer/>
          </footer>        
        </div>   
        
      </div>
    );
  }
}

export default App;