import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi'
import { cityActions } from '../../redux-toolkit/slice/cities.slice';

import './citytable.style.scss';


function CityTable() {
    const dispatch = useDispatch()
    const cities = useSelector((state) => state.city.cities)


    const dipacthDeleteCity = (index) => {
        dispatch(cityActions.removeCity(index))
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