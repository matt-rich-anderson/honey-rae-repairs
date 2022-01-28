import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeList } from "./employees/EmployeeList"
import { Ticket } from "./tickets/Ticket"
import { TicketForm } from "./tickets/TicketForm"
import { TicketList } from "./tickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}