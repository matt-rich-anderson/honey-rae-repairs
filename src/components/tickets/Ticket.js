import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Ticket = () => {
    const [ticket, set] = useState({})
    const [employees, syncEmployees] = useState([])
    const { ticketId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(set)
        },[ ticketId ]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees`)
                .then(res => res.json())
                .then(syncEmployees)
        },[]
    )

    const assignEmployee = (evt) => {

        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(evt.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTicket)
        })
            .then(() => {
                history.push("/tickets")
            })
    }

    return (
        <>  
            <h2>Ticket {ticketId} Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select
                        value={ ticket.employeeId }
                        >
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}

