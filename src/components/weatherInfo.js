import React from "react";

class WeatherInfo extends React.Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <div> 
                    <p>Place: {this.props.city}, {this.props.country}</p>  
                    <p>Temp: {this.props.temp} °С</p>  
                    <p>Sunrise: {this.props.sunrise}</p>  
                    <p>Sunset: {this.props.sunset}</p>
                    </div> 
                }

                {this.props.error &&
                    <div>
                        <p>Error: {this.props.error}</p>
                    </div>

                }
                 
            </div>
        );
    }
}

export default WeatherInfo