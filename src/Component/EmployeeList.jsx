
import React from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, editEmployee, deleteEmployee }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found. Please add an employee.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>
                  <td>₹{employee.salary.toLocaleString('en-IN')}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editEmployee(employee)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
