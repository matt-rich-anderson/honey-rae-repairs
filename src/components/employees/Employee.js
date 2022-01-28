import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(setEmployee)
        },
        [ employeeId ]
    )


    return(
        <>
            <h2>{employee.name}</h2>
        </>
    )

}
