import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";

function App() {
	const [employee, setEmployee] = useState(null);

	const getEmployee = () => {
		// Send the request
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<div className="App">
			{employee && <EmployeeCard employee={employee} />}
			<button type="button" onClick={getEmployee}>
				Get Employee
			</button>
		</div>
	);
}
export default App;
