import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialtyMessage, updateMessage] = useState(``)

    useEffect(() => {fetch("http://localhost:8088/employees").then(res => res.json())
                .then((data) => {changeEmployee(data)})},
        []
    )

    useEffect(() => {
            const justSpecialities = employees.map(emp => emp.specialty)
            updateMessage(justSpecialities.join(", "))
        }, [employees])

    return (
        <>
            <div>
                Specialties: {specialtyMessage}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}

   /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */