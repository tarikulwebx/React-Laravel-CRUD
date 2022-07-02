import React from 'react'
import { Button, Modal } from "react-bootstrap";

const ViewModal = ({ show, setShow, currentEmployee }) => {
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='mb-2'>
                    Name: <strong>{currentEmployee.employee_name}</strong>
                </p>
                <p className='mb-0'>
                    Salary: <strong>{currentEmployee.salary}</strong>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewModal