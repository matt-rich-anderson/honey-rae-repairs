import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./tickets.css";

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )

    return(

        <>
            <button onClick = {()=>history.push("/ticketform")}>Create Ticket</button>
            {tickets.map( (ticket) => {
                        return <p key={`ticket--${ticket.id}`}>
                            "{ticket.description}" submitted by {ticket.customer.name}, worked on by {ticket.employee.name}
                        </p>
                    }
                )    
            }
        </>
    )

}