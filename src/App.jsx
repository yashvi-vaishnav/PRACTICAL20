
import React, { useState } from 'react';
import EmployeeForm from './Component/EmployeeForm';
import EmployeeList from './Component/EmployeeList';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'vipa',
      email: 'vipa@example.com',
      department: 'IT',
      salary: 35000
    },
    {
      id: 2,
      name: 'suhani',
      email: 'suhani@example.com',
      department: 'HR',
      salary: 30000
    }
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // CREATE
  const addEmployee = (employee) => {
    setEmployees((previous) => [...previous, employee]);
  };

  // SELECT EMPLOYEE FOR EDITING
  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // UPDATE
  const updateEmployee = (updatedEmployee) => {
    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setSelectedEmployee(null);
  };

  // DELETE
  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );

    if (selectedEmployee?.id === id) {
      setSelectedEmployee(null);
    }
  };

  const cancelEdit = () => {
    setSelectedEmployee(null);
  };

  return (
    <div>
      <h1 className="heading">Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        selectedEmployee={selectedEmployee}
        updateEmployee={updateEmployee}
        cancelEdit={cancelEdit}
      />

      <EmployeeList
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;
