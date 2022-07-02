import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Container, Button } from "react-bootstrap";
import TableRow from './TableRow';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateModal from './modal/CreateModal';

const EmployeeTable = () => {

    const [employees, setEmployees] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
      axios.get("/get/employee/list").then(function (response) {
        //   console.log(response.data);
          setEmployees(response.data);
      });
    }, [])
    

    return (
        <Container className="mt-5">
            <ToastContainer />

            <CreateModal
                showCreateModal={showCreateModal}
                setShowCreateModal={setShowCreateModal}
            />

            <div className="text-end">
                <Button
                    variant="success"
                    className="mb-4"
                    onClick={(e) => setShowCreateModal(true)}
                >
                    +Add New Employee
                </Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        // <tr key={index}>
                        //     <td>{employee.id}</td>
                        //     <td>{employee.employee_name}</td>
                        //     <td>{employee.salary}</td>
                        //     <td>-</td>
                        // </tr>
                        <TableRow key={index} employee={employee} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default EmployeeTable;