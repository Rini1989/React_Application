import React from 'react';
import { useNavigate } from "react-router-dom";


export default function DisplayNames(){
	const navigate  = useNavigate();
	//handle logout
	const handleLogout = (e) => {
		navigate('/signin');
		
	};

	const names = [ 'Rini' , 'Riya' , 'Riki' , 'Rimi'];
	return(
		<div>
			<div>
			<button onClick={handleLogout} className="logoutbtn" type="submit">
			LogOut
			</button>
		</div>
		<div>
			<h1>Users signed in</h1>
			{
				names.map(name => <h2>{name}</h2>)
			}
		</div>
		</div>
	)
}
	
	