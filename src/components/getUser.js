import React from 'react'
import { useEffect, useState } from 'react';

export const getUser = () => {
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        fetch('/api/').then(res => {
            return res.json()
        })
    }).then(jsonResponse => console.log("test" + jsonResponse));

    //setInitialState(jsonResponse
}