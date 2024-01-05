import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi'
import { removeCity } from '../../redux-toolkit/slice/cities.slice';

import './citytable.style.scss';



function CityTable() {
    const dispatch = useDispatch()
    const cities = useSelector((state) => state.city.userCityDetails)
    const userAuth = useSelector((state) => state.signIn.signInCredential)

    const dipacthDeleteCity = (index) => {
        const city = cities[index]
        dispatch(removeCity({ userAuth, city }))
    }

    return (
        <>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>CITY NAME</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {data}
                                </td>
                                <td>
                                    <Button onClick={() => dipacthDeleteCity(index)} variant="danger"><BiTrash /></Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default CityTable;