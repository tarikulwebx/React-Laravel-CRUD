import React from 'react'
import TableActionButtons from './TableActionButtons';

const TableRow = ({employee}) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.employee_name}</td>
            <td>{employee.salary}</td>
            <td style={{ width: "280px" }} className="text-center">
                <TableActionButtons id={employee.id} />
            </td>
        </tr>
    );
};

export default TableRow