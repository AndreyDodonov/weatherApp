import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>   
                <form onSubmit={this.props.weatherMethod}>
                    <input type='text' name='city' placeholder='City' required />
                    <button>Get weather</button>
                </form>
            </div>
            
        );
    }
}

export default Form