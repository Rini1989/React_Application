import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

const url = 'https://localhost://8080/signin';

async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
   	  method: 'POST',
   	  headers: {
   		'Content-Type': 'application/json'
   	  },
   	  body: JSON.stringify(credentials)
   	})
   	  .then(data => data.json())
      }
   
export default function Login(setToken ) {
	const navigate  = useNavigate();
	// States for login
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState()
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};
	// Showing success message
	const successMessage = () => {
		return (
		<div
			className="success"
			style={{
			display: submitted ? '' : 'none',
			}}>
			<h1>User successfully Logged In!!</h1>
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
	// Handling the form submission
	const handleSubmit = async e => {
		e.preventDefault();
		if ( email === '' || password === '') {
			setError(true);
			} else {
			setSubmitted(true);
			setError(false);
			try{
				const resp = await axios.post(url, { email, password });
				console.log(resp.data);
				
			}catch(error){
				console.log(error.response);
			}
			navigate('/signedupuser');
		}
		const token = await loginUser({
			email,
			password
		});
		
	};
return (
	<div className="form">
	<div>
		<h1>Login</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
	<form onSubmit={handleSubmit}>
		{/* Labels and inputs for form data */}
		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />
		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />
		<button  className="btn" type="submit">
		Login
		</button>
	</form>
	</div>
);
}
Login.propTypes = {
	setToken: PropTypes.func.isRequired
}