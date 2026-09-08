import { useState } from "react";

function EmployeeDirectory({
    employees,selectedEmployee, setSelectedEmployee
}){
    const [search, setSearch] = useState("");

    const filteredEmployees = employees.filter((employee)=>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(search.toLowerCase())
);

return(
    <div className="card shadow-sm">

        <div className="card-header bg-white">
            <h5 className="mb-3">Employee Directory</h5>

            <input type="text" 
            className="form-control"
            placeholder="Search employee.."
            value={search}
            onChange = {(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="list-group list-group-flush">

          {filteredEmployees.map((employee) => (

            <button 
            key={employee.id}
            className = {`list-group-item list-group-item-action ${
              selectedEmployee.id === employee.id? "active":""
            }`}
            onClick={() => setSelectedEmployee(employee)}
            >
              <div className="d-flex align-items-center">
                
                <img src={employee.photo} alt={employee.name} 
                className="rounded-circle me-3" width="45" height="45" />

                <div>
                  <strong>{employee.name}</strong>

                  <div className="small">
                    {employee.employeeId}
                  </div>

                  <div className="small">
                    {employee.employment.designation}
                  </div>

                </div>

              </div>
            </button>
          ))}
        </div>

        
    </div>
);
}

export default EmployeeDirectory;
