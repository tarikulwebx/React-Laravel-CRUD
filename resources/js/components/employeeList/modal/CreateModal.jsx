import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CreateModal = ({showCreateModal, setShowCreateModal}) => {

    const [newEmployeeDetails, setNewEmployeeDetails] = useState({
        employee_name: '',
        salary: ''
    });

    const handleClose = () => setShowCreateModal(false);


    const handleCreateEmployeeDetails = () => {
        axios
            .post("/store/employee/details", {
                employeeName: newEmployeeDetails.employee_name,
                employeeSalary: newEmployeeDetails.salary,
            })
            .then((response) => {
                setShowCreateModal(false);
                toast.success("Employee Saved Successfully");
                setTimeout(() => {
                    location.reload();
                }, 2000)
            });
    }

    return (
        <Modal
            show={showCreateModal}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Employee name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Employee name"
                            onChange={(e) => {
                                setNewEmployeeDetails({
                                    ...newEmployeeDetails,
                                    employee_name: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Salary"
                            onChange={(e) => {
                                setNewEmployeeDetails({
                                    ...newEmployeeDetails,
                                    salary: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="info"
                    type="submit"
                    onClick={handleCreateEmployeeDetails}
                >
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateModal;
