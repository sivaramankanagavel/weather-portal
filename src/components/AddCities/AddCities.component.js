import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../../redux-toolkit/slice/cities.slice';
import CityTable from '../CityTable/CityTable.component';

import "./addcities.style.scss";

function AddCities() {
    const [city, setCity] = useState("")
    const dispatch = useDispatch();
    const userAuth = useSelector((state) => state.signIn.signInCredential)

    const handleInput = (event) => {
        const { name, value } = event?.target;
        setCity(value)
    }

    const addCityFunc = () => {
        dispatch(addCity({ userAuth, city }))
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
                <Button onClick={addCityFunc} variant="outline-secondary" id="button-addon2">
                    ADD CITY
                </Button>
            </InputGroup>
        </div>
    )
}

export default AddCities;