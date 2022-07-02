import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateModal = ({
    showUpdateModal,
    setShowUpdateModal,
    currentEmployee,
    setCurrentEmployee,
}) => {
    const handleClose = () => setShowUpdateModal(false);

    const handleUpdateEmployeeData = () => {
        axios.post("/update/employee/details", {
            employeeId: currentEmployee.id,
            employeeName: currentEmployee.employee_name,
            employeeSalary: currentEmployee.salary,
        }).then((response) => {
            //console.log(response);
            //location.reload();
            toast.success("Employee Updated Successfully");
            setTimeout(()=> {
                location.reload();
            }, 2500)
        });
    };

    return (
        <Modal
            show={showUpdateModal}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Employee name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={currentEmployee.employee_name || ""}
                            placeholder="Employee name"
                            onChange={(e) => {
                                setCurrentEmployee({
                                    ...currentEmployee,
                                    employee_name: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={currentEmployee.salary || ""}
                            placeholder="Salary"
                            onChange={(e) => {
                                setCurrentEmployee({
                                    ...currentEmployee,
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
                    onClick={handleUpdateEmployeeData}
                >
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal