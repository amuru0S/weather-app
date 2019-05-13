import React from 'react';

const ClearForm = props => (
    <form onSubmit={props.getWeather}>
    <i className="fa fa-refresh fa-spin" onClick={props.clearForm}></i>
    </form>
);

export default ClearForm;