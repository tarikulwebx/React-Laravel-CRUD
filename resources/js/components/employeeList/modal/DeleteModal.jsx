import axios from "axios";
import React from "react";
import { Button, Modal, Toast } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteModal = ({
    showDeleteModal,
    setShowDeleteModal,
    currentEmployee,
}) => {
    const handleClose = () => setShowDeleteModal(false);

    // Delete employee function
    const handleDeleteEmployeeData = (id) => {
        axios.delete("/delete/employee/data/" + id).then((response) => {
            setShowDeleteModal(false);
             toast.error("Employee Deleted Successfully");
            setTimeout(() => {
                location.reload();
            }, 2500);
        });
    }

    return (
        <Modal show={showDeleteModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Employee Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure, You want to delete this Employee
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="danger"
                    onClick={()=>handleDeleteEmployeeData(currentEmployee.id)}
                >
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
