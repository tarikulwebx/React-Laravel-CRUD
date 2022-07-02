import React, { useState } from 'react'
import { ButtonGroup, Button } from "react-bootstrap";
import ViewModal from './modal/ViewModal';
import axios from "axios";
import UpdateModal from './modal/UpdateModal';
import DeleteModal from './modal/DeleteModal';

const TableActionButtons = ({id}) => {
    const [show, setShow] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [currentEmployee, setCurrentEmployee] = useState({
        id: "",
        employee_name: "",
        salary: ""
    });

    const getEmployeeData = (employeeId) => {
        axios
            .post("/get/individual/employee/details", {
                employeeId: employeeId,
            })
            .then((response) => {
                setCurrentEmployee({
                    ...currentEmployee,
                    id: response.data.id,
                    employee_name: response.data.employee_name,
                    salary: response.data.salary,
                });
            });
    };

    const handleViewButtonClick = (employeeId) => {
        setShow(true);
        getEmployeeData(employeeId);
    }

    const handleUpdateButtonClick = (employeeId) => {
        setShowUpdateModal(true);
        getEmployeeData(employeeId);
    }

    const handleDeleteButtonClick = (employeeId) => {
        setShowDeleteModal(true);
        getEmployeeData(employeeId);
    }


    
 
    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button
                    variant="primary"
                    onClick={() => handleViewButtonClick(id)}
                >
                    View
                </Button>

                <Button
                    variant="info"
                    onClick={() => handleUpdateButtonClick(id)}
                >
                    Update
                </Button>

                <Button
                    variant="danger"
                    onClick={() => handleDeleteButtonClick(id)}
                >
                    Delete
                </Button>
            </ButtonGroup>

            <ViewModal
                show={show}
                setShow={setShow}
                currentEmployee={currentEmployee}
            />

            <UpdateModal
                showUpdateModal={showUpdateModal}
                setShowUpdateModal={setShowUpdateModal}
                currentEmployee={currentEmployee}
                setCurrentEmployee={setCurrentEmployee}
            />

            <DeleteModal
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
                currentEmployee={currentEmployee}
            />
        </>
    );
}

export default TableActionButtons