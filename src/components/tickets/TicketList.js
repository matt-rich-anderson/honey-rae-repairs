import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./tickets.css";


export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()
    
    const getState = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
        .then((data) => {
            setTickets(data)})}
    
    useEffect(() => {getState()},
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        }).then(() => getState())
    }    


    return(

        <>
            <button onClick = {()=>history.push("/tickets/create")}>Create Ticket</button>
            {tickets.map( (ticket) => {
                        return <>
                                <p className={ticket.emergency ? `emergency` : `ticket`}>{ticket.emergency ? "🚑" : ""} 
                                    <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                </p>
                                <button onClick={() => {
                                    return deleteTicket(ticket.id)
                                } }>Delete</button>
                                </>
                                
                    }
                )    
            }
        </>
    )

}