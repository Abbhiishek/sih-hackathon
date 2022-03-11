
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import {client} from '../client'


const App = () => {
		const navigate = useNavigate();
		const responseGoogle = (response) => {
		  localStorage.setItem('user', JSON.stringify(response.profileObj));
		  const { name, googleId, imageUrl } = response.profileObj;
		  const doc = {
			_id: googleId,
			_type: 'user',
			userName: name,
			image: imageUrl,
		  };
		  client.createIfNotExists(doc).then(() => {
			navigate('/', { replace: true });
		  });
		};
	  
		return (
			<div className="vh-100 gradient-custom">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card  text-white login-card" styleName="border-radius: 1rem;">
						<div className="card-body p-5 text-center">

							<div className="mb-md-3 mt-md-4 pb-2">

							<h2 className="fw-bold mb-2 text-uppercase ">Login</h2>

							<div className="d-flex justify-content-center text-center mt-4 pt-1">
							<GoogleLogin
								clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
								render={(renderProps) => (
									<button
									type="button"
									className="btn btn-outline-success"
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									>
									<FcGoogle className="mr-4" /> Sign in with google
									</button>
								)}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy="single_host_origin"
								/>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
			
		)
	}
export default App;