import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout.jsx";

import Dashboard from "../modules/dashboard/Dashboard.jsx";

import EmployeeList from "../modules/hr/employees/EmployeeList.jsx";
import EmployeeProfile from "../modules/hr/employees/EmployeeProfile.jsx";
import EditEmployee from "../modules/hr/employees/EditEmployee.jsx";
import AddEmployee from "../modules/hr/employees/AddEmployee.jsx";

import LeaveManagement from "../modules/hr/leave/LeaveManagement.jsx";
import Attendance from "../modules/hr/attendance/Attendance.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* ================================
              HUMAN RESOURCES - EMPLOYEES
          ================================= */}

          {/* Employee List */}
          <Route
            path="/hr/employees"
            element={<EmployeeList />}
          />

          {/* Add Employee */}
          <Route
            path="/hr/employees/add"
            element={<AddEmployee />}
          />

          {/* Employee Profile */}
          <Route
            path="/hr/employees/:id"
            element={<EmployeeProfile />}
          />

          {/* Edit Employee */}
          <Route
            path="/hr/employees/:id/edit"
            element={<EditEmployee />}
          />

          {/* ================================
              HUMAN RESOURCES - LEAVE
          ================================= */}

          <Route
            path="/hr/leave"
            element={<LeaveManagement />}
          />

          {/* ================================
              HUMAN RESOURCES - ATTENDANCE
          ================================= */}

          <Route
            path="/hr/attendance"
            element={<Attendance />}
          />

          {/* ================================
              DEFAULT
          ================================= */}

          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;