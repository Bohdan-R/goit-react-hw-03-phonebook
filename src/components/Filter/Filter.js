import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({value, onChange}) => (
    <div className="find-form">
        <label className="find-form__label">
            Find contact by name
            <input className="find-form__input" type="text" value={value} onChange={onChange}/>
        </label>
    </div>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;