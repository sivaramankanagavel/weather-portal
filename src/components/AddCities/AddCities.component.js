import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cityActions } from '../../redux-toolkit/slice/cities.slice';
import CityTable from '../CityTable/CityTable.component';

import "./addcities.style.scss";

function AddCities() {
    const [city, setCity] = useState("")
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.city.cities)

    console.log(cities)

    const handleInput = (event) => {
        const { name, value } = event?.target;
        setCity(value)
    }

    const addCity = () => {
        dispatch(cityActions.addCity(city))
    }
    return (
        <div className='favorite-city-container'>
            <CityTable />
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="...Add City"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleInput}
                    value={city}
                />
                <Button onClick={addCity} variant="outline-secondary" id="button-addon2">
                    ADD CITY
                </Button>
            </InputGroup>
        </div>
    )
}

export default AddCities;