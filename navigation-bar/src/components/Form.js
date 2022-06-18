import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  

export default function Form() {
	const navigate  = useNavigate();
	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [number, setPhoneNo] = useState('');
	const [age, setAge] = useState('');
	const [location, setLocation] = useState('');
	const [occupation, setOccupation] = useState('');
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const url = "https://localhost:8080/sign-up";
	const [data, setData] = useState({
		name:"",
		email:"",
		password:"",
		number:"",
		age:"",
		location:"",
		occupation:""
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
	const handleLocation = (e) => {
		setLocation(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	const handleOccupation = (e) => {
		setOccupation(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	const handleAge = (e) => {
		setAge(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	const handlePhoneno = (e) => {
		setPhoneNo(e.target.value);
		setSubmitted(false);
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	};
	// Handling the form submission
	const handleSubmit = (e) => {
		if ( email === '' || name === '' || age === '' || number === '' || location === '' || occupation === '') {
			setError(true);
			} 
		else {
			setSubmitted(true);
			setError(false);
		}
		e.preventDefault();
		axios.post(url,{
			name:data.name,
			age:data.age,
			email:data.email,
			number:data.number,
			location:data.location,
			occupation:data.occupation
		})
		.then(res=>{
			alert("Connection Success!");
			console.log(res.data);
		})
	};
	//handle logout
	const handleLogout = (e) => {
		navigate('/signin');
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
	<button onClick={handleLogout} className="logoutbtn" type="submit">
		LogOut
	</button>
		<h1>Please enter user details!</h1>
	</div>
	

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
	
	<form onSubmit={(e)=> handleSubmit(e)}>
		
		{/* Labels and inputs for form data */}
		
		<label className="label">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input onChange={(e)=>handleName(e)} id="name" value={data.name} className="input"
		 type="text" placeholder='Name'/></label>
		
		<label className="label">Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input onChange={(e)=>handleAge(e)} id="age" value={data.age}  className="input"
		 type="number" placeholder='Age' /></label>

		<label className="label">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input onChange={(e)=>handleEmail(e)} id="email" value={data.email}  className="input"
		 type="text" placeholder='Email'/></label>
		
		<label className="label">Phone No 
		<input onChange={(e)=>handlePhoneno(e)} id="number" value={data.number}  className="input"
		 type="number" placeholder='Phone No'/></label>

		<label className="label">Location &nbsp;&nbsp;
		<input onChange={(e)=>handleLocation(e)} id="location" value={data.location}  className="input"
		 type="text" placeholder='Location'/></label>

		<label className="label">Occupation
		<input onChange={(e)=>handleOccupation(e)} id="occupation" value={data.occupation}  className="input"
		type="text" placeholder='Occupation' /></label>
			
		<button  className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
