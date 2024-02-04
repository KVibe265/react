import './App.css';
import Employee from './components/employee';

function App() {
	const showEmployees = true;
	return (
		<div className='App'>
			{showEmployees ? (
				<>
					<Employee name='Terence' role='Intern' />
					<Employee name='Lusungu' />
					<Employee name='Shadreck' />
					<Employee name='Elina' />
				</>
			) : (
				<p>You cannot see the employee</p>
			)}
		</div>
	);
}

export default App;
