import { useState } from 'react'

function App() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setemail]       = useState('')
	const [fullname, setfullname] = useState('')


	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('https://stormy-peak-47838.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'access-control-allow-origin': 'true' ,
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.access_token) {
			localStorage.setItem('token', data.access_token)
			alert('Login successful')
			window.location.href = '/home'
		} else {
			alert('Please check your username and password')
		}
	}
	async function signupUser(event) {
		event.preventDefault()

		const response = await fetch('https://stormy-peak-47838.herokuapp.com/Users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				email,
				password,
				fullname,
				username,
				"bio": "404 nOT Found",
				"profile_pic": "https://www.kmop.gr/wp-content/uploads/2022/01/profile_pic.png",
				"github_link": "NOT FOUND"
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()

		if (data.access_token) {
			localStorage.setItem('token', data.access_token)
			alert('Login successful')
			window.location.href = '/home'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="username"
					placeholder="username"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input className="btn btn-primary" type="submit" value="Login" />
			</form>

			<br />
			<br />
			{/* <form onSubmit={loginUser}>
			    <h1>signup</h1>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="username"
					placeholder="username"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				
			

			<input
					value={email}
					onChange={(e) => setemail(e.target.value)}
					type="email"
					placeholder="Email"
				/>

                <input
					value={fullname}
					onChange={(e) => setfullname(e.target.value)}
					type="text"
					placeholder="Your fullname"
				/>
				<input type="submit" value="Login" />
			</form> */}
		</div>
	)
}

export default App