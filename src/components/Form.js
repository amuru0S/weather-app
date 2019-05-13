import React from 'react';

const Form = props => (
            <form onSubmit={props.getWeather}>
                <input className="input-city" type='text' name='city' placeholder='city..' />
                <input className="input-country" type='text' name='country' placeholder='country..' />
                <button type='submit' className="get-weather"> Get Weather </button>
            </form>
        );
  
export default Form;