import { useState } from "react";

import { employees as initialEmployees } from "./data/employees";

import EmployeeDirectory from "./components/EmployeeDirectory";
import ProfileHeader from "./components/ProfileHeader";
import Overview from "./components/Overview";
import PersonalInfo from "./components/PersonalInfo";
import EmploymentDetails from "./components/EmploymentDetails";
import Contacts from "./components/Contacts";
import Banking from "./components/Banking";
import Documents from "./components/Documents";
import Qualifications from "./components/Qualifications";
import Assets from "./components/Assets";
import Access from "./components/Access";
import History from "./components/History";
import AddEmployee from "./components/AddEmployee";
import Attendance from "./components/Attendance";

function App() {
  const [employeeList, setEmployeeList] = useState(initialEmployees);

  const [selectedEmployee, setSelectedEmployee] = useState(initialEmployees[0]);

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    "overview",
    "personal",
    "employment",
    "contacts",
    "banking",
    "documents",
    "qualifications",
    "assets",
    "access",
    "history",
    "attendance",
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <Overview employee={selectedEmployee} />;

      case "personal":
        return <PersonalInfo employee={selectedEmployee} />;

      case "employment":
        return <EmploymentDetails employee={selectedEmployee} />;

      case "contacts":
        return <Contacts employee={selectedEmployee} />;

      case "banking":
        return <Banking employee={selectedEmployee} />;

      case "documents":
        return <Documents employee={selectedEmployee} />;

      case "qualifications":
        return <Qualifications employee={selectedEmployee} />;

      case "assets":
        return <Assets employee={selectedEmployee} />;

      case "access":
        return <Access employee={selectedEmployee} />;

      case "history":
        return <History employee={selectedEmployee} />;

      case "attendance":
        return <Attendance employee={selectedEmployee} />;

      default:
        return <Overview employee={selectedEmployee} />;
    }
  };

  const addEmployee = (newEmployee) => {
    setEmployeeList((previousEmployees) => [...previousEmployees, newEmployee]);

    setSelectedEmployee(newEmployee);
    setActiveTab("overview");
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployeeList((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
    setSelectedEmployee(updatedEmployee);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-primary px-4">
        <span className="navbar-brand mb-0 h1">ERP System</span>

        <span className="text-white">Profile Management</span>
      </nav>

      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="d-flex justify-content-end mb-3">
              <AddEmployee addEmployee={addEmployee} />
            </div>

            <EmployeeDirectory
              employees={employeeList}
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
            />
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <ProfileHeader
              employee={selectedEmployee}
              updateEmployee={updateEmployee}
            />

            {/* Navigation Tabs */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <ul className="nav nav-pills flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <li className="nav-item" key={tab}>
                      <button
                        className={`nav-link ${
                          activeTab === tab ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Active Tab */}
            {renderTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
