import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./pages/login'))
const Landing = lazy(() => import('./pages/landing'))
const Home = lazy(() => import('./pages/home'));
const Dashboard = lazy(() => import('./pages/profile'));
const Media = lazy(() => import('./pages/media'));
const Scholorship = lazy(() => import('./pages/scholorship'));
const Developers = lazy(() => import('./pages/developer'));


const App = () => {

	return (
		<Router>
			<Suspense fallback={<div>
				<h1>loding.........</h1>


			</div>}>
			<Routes>
			    <Route path="/" exact element={<Landing/>} />
				<Route path="/login"  element={<Login/>} />
				<Route path="/home"  element={<Home/>} />
				<Route path="/dashboard"  element={<Dashboard/>} />
				<Route path="/sociome" element={<Media/>} />
				<Route path="/scholorship"  element={<Scholorship/>} />
				<Route path="/developers"  element={<Developers/>} />
			</Routes>
			</Suspense>
		</Router>
	)
}

export default App