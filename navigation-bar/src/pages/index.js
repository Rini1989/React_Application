import { func } from 'prop-types';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate  = useNavigate();
	const handleUser = (e) => {
		navigate('/sign-up')
	};
	const handleAdmin = (e) => {
		navigate('/adminloginin')
	};
return (
<div
	style={{
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}}
	>
	<h1>Welcome to my Application!!</h1>
	<div>
		<>
		<button class="userbutton" onClick={handleUser}>User</button>
		<button class="userbutton" onClick={handleAdmin}>Admin</button>
		</>
	</div>
</div>
);
};

