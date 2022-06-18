import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Form from './components/Form';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginin from './pages/adminlogin';

function App() {
  return (
	 <div className="App">
		<Router>
		<Navbar />
		<Routes>
			<Route path='/' exact element={<Home/>} />
			<Route path='/about' element={<About/>} />
			<Route path='/signin' element={<SignIn/>} />
			<Route path='/sign-up' element={<SignUp/>} />
			<Route exact path="/signedupuser" element={<Form/>} />
			<Route exact path="/admindashboard" element={<AdminDashboard/>} />
			<Route exact path="/adminloginin" element={<AdminLoginin/>} />
		</Routes>
		</Router>
	</div>
	);
}
export default App;
