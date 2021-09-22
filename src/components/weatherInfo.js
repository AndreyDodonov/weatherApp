import React from "react";

const WeatherInfo = (props) => {
    return (
        <div>
        { props.city &&
            <div className="weather-info"> 
                <p>Place: {props.city}, {props.country}</p>  
                <p>Temp: {props.temp} °С</p>
                <p>Pressure: {props.pressure}</p>  
                <p>Sunrise: {props.sunrise}</p>  
                <p>Sunset: {props.sunset}</p>
            </div> 
        }

        {props.error &&
            <div>
                <p style={{color: "#FF0000"}}>Error: {props.error}</p>
            </div>
        }
         
    </div>
    );
}

export default WeatherInfo