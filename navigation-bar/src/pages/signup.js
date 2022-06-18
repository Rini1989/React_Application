import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
	const navigate  = useNavigate();
	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState();
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const url = "https://localhost:8080/sign-up";
	const [data, setData] = useState({
		name:"",
		email:"",
		password:"",
		});

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	// Handling the form submission
	const handleSubmit = async e => {
		if ( email === '' || password === '') {
			setError(true);
			} else {
			setSubmitted(true);
			setError(false);
			if (user) {
				return <div>{name} is logged in</div>;
			}	
			e.preventDefault();
			axios.post(url,{
				name:data.name,
				email:data.email,
				password:data.password
			})
			.then(res=>{
				console.log(res.data);
			})	  
				navigate('/signedupuser');
			}
		};
		// Showing success message
		const successMessage = () => {
			return (
			<div
				className="success"
				style={{
				display: submitted ? '' : 'none',
				}}>
				<h1>User {name} successfully registered!!</h1>
			</div>
			);
		};
		// Showing error message if error is true
		const errorMessage = () => {
			return (
			<div
				className="error"
				style={{
				display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
			);
		};
return (
	<div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Register
		</button>
	</form>
	</div>
);
}
