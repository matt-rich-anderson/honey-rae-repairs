import React, {useEffect, useState} from "react";


export const HoneyRaeRepairs = () => {
    const [customers, setCustomers] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )
    
    return (
        <h1>Honey Rae's Repair</h1>
    )
}

