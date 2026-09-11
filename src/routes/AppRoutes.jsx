import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout.jsx";

import Dashboard from "../modules/dashboard/Dashboard.jsx";

import EmployeeList from "../modules/hr/employees/EmployeeList.jsx";
import EmployeeProfile from "../modules/hr/employees/EmployeeProfile.jsx";
import EditEmployee from "../modules/hr/employees/EditEmployee.jsx";
import AddEmployee from "../modules/hr/employees/AddEmployee.jsx";

import LeaveManagement from "../modules/hr/leave/LeaveManagement.jsx";
import Attendance from "../modules/hr/attendance/Attendance.jsx";
import Payroll from "../modules/hr/payroll/Payroll.jsx";
import Finance from "../modules/finance/Finance.jsx";
import CustomerLeads from "../modules/crm/customers/CustomerLeads.jsx";
import Projects from "../modules/projects/Projects.jsx";
import ProjectDetails from "../modules/projects/ProjectDetails.jsx";
import AddProject from "../modules/projects/AddProject.jsx";
import Administration from "../modules/administration/Administration.jsx";
import OrganizationSettings from "../modules/administration/OrganizationSettings.jsx";
import UsersRoles from "../modules/administration/UsersRoles.jsx";
import Permissions from "../modules/administration/Permissions.jsx"


function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ================================
              HUMAN RESOURCES - EMPLOYEES
          ================================= */}

          {/* Employee List */}
          <Route path="/hr/employees" element={<EmployeeList />} />

          {/* Add Employee */}
          <Route path="/hr/employees/add" element={<AddEmployee />} />

          {/* Employee Profile */}
          <Route path="/hr/employees/:id" element={<EmployeeProfile />} />

          {/* Edit Employee */}
          <Route path="/hr/employees/:id/edit" element={<EditEmployee />} />

          {/* ================================
              HUMAN RESOURCES - LEAVE
          ================================= */}

          <Route path="/hr/leave" element={<LeaveManagement />} />

          {/* ================================
              HUMAN RESOURCES - ATTENDANCE
          ================================= */}

          <Route path="/hr/attendance" element={<Attendance />} />

          {/* ================================
              HUMAN RESOURCES - PAYROLL
          ================================= */}
          <Route path="/hr/payroll" element={<Payroll />} />

          {/* ================================
              FINANCE - FINANCE
          ================================= */}
          <Route path="/finance" element={<Finance />} />

          {/* ================================
              CRM - Customer & Lead
          ================================= */}
          <Route path="/crm/customers" element={<CustomerLeads />} />

          {/* ================================
              PROJECTS
          ================================= */}
          <Route path="/projects" element={<Projects />} />

          {/* ================================
              PROJECT DETAILS
          ================================= */}
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* ================================
              ADD PROJECT 
          ================================= */}
          <Route path="/projects/add" element={<AddProject />} />


          {/* ================================
              SETTING
          ================================= */}
          <Route path="/administration" element={<Administration />}
/>

          {/* ================================
              ORGANIZATION SERTTING
          ================================= */}
          <Route path="/administration/organization" element={<OrganizationSettings />} />

          {/* ================================
              USERS ROLES SETTING
          ================================= */}
          <Route path="/administration/users" element={<UsersRoles />} />

          {/* ================================
              PERMISSION SETTING
          ================================= */}
          <Route path="/administration/permissions" element={<Permissions />} />

          {/* ================================
              DEFAULT
          ================================= */}

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
