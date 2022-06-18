import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/signin' activeStyle>
			Sign In
		</NavLink>
		<NavLink to='/adminloginin' activeStyle>
			Admin Dashboard
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
