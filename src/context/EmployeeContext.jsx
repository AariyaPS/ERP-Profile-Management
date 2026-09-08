import { createContext, useContext, useState } from "react";
import { employees as initialEmployees } from "../data/employees.jsx";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(initialEmployees);

  // Update an existing employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

  // Add a new employee
  const addEmployee = (newEmployee) => {
    setEmployees((currentEmployees) => [...currentEmployees, newEmployee]);
  };

  // Find employee by ID
  const getEmployeeById = (id) => {
    return employees.find((employee) => String(employee.id) === String(id));
  };

  //=========================================
  //UPDATE LEAVE STATUS
  //==========================================
  //STATUS CAN BE:
  //"Approved"
  //"Rejected"
  //"Pending"
  //============================================

  const updateLeaveStatus = (employeeId, leaveIndex, newStatus) => {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) => {
        //Find the employee
        if (String(employee.id) !== String(employeeId)) {
          return employee;
        }

        //Get existing Leaves
        const existingLeaves = employee.attendance?.leaves || [];

        //Create updated Leaves
        const updatedLeaves = existingLeaves.map((leave, index) => {
          if (index === leaveIndex) {
            return {
              ...leave,
              status: newStatus,
            };
          }

          return leave;
        });

        //Return updated employee
        return {
          ...employee,
          attendance: {
            ...employee.attendance,
            leaves: updatedLeaves,
          },
        };
      }),
    );
  };

  // =========================================
  // APPROVE LEAVE
  // =========================================

  const approveLeave = (employeeId, leaveIndex) => {
    updateLeaveStatus(employeeId, leaveIndex, "Approved");
  };

  //==================================================================
  //REJECT LEAVE
  //===================================================================
  const rejectLeave = (employeeId, leaveIndex) => {
    updateLeaveStatus(employeeId, leaveIndex, "Rejected");
  };

  //===================================================================
  //PROVIDER
  //===================================================================

  return (
    <EmployeeContext.Provider
      value={{
        //EMPLOYEE DATA
        employees,
        //Employee functions
        updateEmployee,
        addEmployee,
        getEmployeeById,

        //Leave functions
        updateLeaveStatus,
        approveLeave,
        rejectLeave
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

// Custom hook
export function useEmployees() {
  return useContext(EmployeeContext);
}
