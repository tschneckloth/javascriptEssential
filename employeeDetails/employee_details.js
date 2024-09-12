const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, skill: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, skill: 'Javascript' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, skill: 'Python' },
];

 // Function to display all employees
 function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.skill}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
 }

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.skill}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findBySkill(skill) {
    const matches = employees.filter(employee => employee.skill === skill);
    let myHtml = '';

    if (matches) {
        matches.map(match => myHtml += `<p>${match.id}: ${match.name}: ${match.name} - ${match.department} - $${match.salary} - ${match.skill}</p>`);
    } else {
        myHtml = '<p>No employees have that skill</p>';
    }
    document.getElementById('employeesDetails').innerHTML = myHtml;
}