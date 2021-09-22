import React from "react";

const Form = (props) => (
    <div>   
        <form onSubmit={props.weatherMethod}>
            <input type='text' name='city' placeholder='City' required />
            <button className="button-get">Get weather</button>
        </form>
    </div>
)

export default Form