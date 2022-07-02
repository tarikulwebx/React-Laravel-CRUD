import React from 'react'
import EmployeeTable from './components/employeeList/EmployeeTable';
import TopNavbar from './components/partials/TopNavbar';

const app = () => {
  return (
      <>
          <TopNavbar />
          <EmployeeTable />;
      </>
  );
}

export default app;