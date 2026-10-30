
import React, { useState, useEffect } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee, selectedEmployee, updateEmployee, cancelEdit }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (selectedEmployee) {
      setName(selectedEmployee.name);
      setEmail(selectedEmployee.email);
      setDepartment(selectedEmployee.department);
      setSalary(String(selectedEmployee.salary));
    } else {
      setName('');
      setEmail('');
      setDepartment('');
      setSalary('');
    }
  }, [selectedEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      id: selectedEmployee ? selectedEmployee.id : Date.now(),
      name,
      email,
      department,
      salary: Number(salary)
    };

    if (selectedEmployee) {
      updateEmployee(employee);
    } else {
      addEmployee(employee);
    }
  };

  return (
    <div className="employee-form">
      <h2>
        {selectedEmployee ? 'Edit Employee' : 'Add Employee'}
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter employee name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <label>Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

        <label>Salary (₹)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter salary"
          min="0"
          required
        />

        <button type="submit">
          {selectedEmployee ? 'Update Employee' : 'Add Employee'}
        </button>

        {selectedEmployee && (
          <button type="button" className="cancel-btn"
            onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default EmployeeForm;
