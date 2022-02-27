import React from 'react';
import Input from './../../UI/Input/Input';
import './Login.css';
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


function Login() {
	let navigate = useNavigate();
	const [ email, setEmail ] = React.useState({
		value: '',
		touch: false,
		error: false
	});

	const [ password, setPassword ] = React.useState({
		value: '',
		touch: false,
		error: false
	});
	const [ loader, setLoader ] = React.useState(false);
	
	// React.useEffect(()=>{
	// 	localStorage.removeItem('token');
	// },[])

	const onSubmit = async (event) => {
		event.preventDefault();
		navigate('/home');

	};

	return (
		<div className="container pt-5 mt-3 wrapper">
			<div className="d-flex justify-content-center h-100 ">
				<div className="card u-border-radius-med u-overfl-hidden">
					<div className="card-header u-remove-border">
						<h3 className="card-header__signIn">Sign In</h3>
						{/* <div className="d-flex justify-content-end social_icon card-header__iconContainer">
							<span>
								<i className="fab fa-facebook-square card-header__icon card-header__icon--1" />
							</span>
							<span>
								<i className="fab fa-google-plus-square card-header__icon card-header__icon--2" />
							</span>
							<span>
								<i className="fab fa-twitter-square card-header__icon card-header__icon--3" />
							</span>
						</div> */}
					</div>
					<div className="card-body u-remove-border" style={{background:"#121C26"}}>
						<form onSubmit={onSubmit}>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text" style={{ backgroundColor: '#00B4A4' }}>
										<AiOutlineUser />
										
									</span>
								</div>

								<Input
									type="email"
									name="email"
									value={email.value}
									onChange={(event) =>
										setEmail({
											value: event.target.value,
											touch: true,
											error: email.value ? false : true
										})}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text" style={{ backgroundColor: '#00B4A4' }}>
										<RiLockPasswordLine />
									</span>
								</div>
								<Input
									type="password"
									value={password.value}
									name="password"
									onChange={(event) =>
										setPassword({
											value: event.target.value,
											touch: true,
											error: password.value ? false : true
										})}
								/>
							</div>
							{/* <div className="row align-items-center remember">
								<input type="checkbox" />Remember Me
							</div> */}
						{!loader ?	<div className="form-group u-pos-rel">
								<input type="submit" value="Login" className="btn login_btn btnLogIn" />
							</div>:
							<div className="spinner-border" role="status" style={{display: 'block',margin:'0 auto'}}>
								<span class="visually-hidden">Loading...</span>
							</div>}
						</form>
					</div>
					<div className="card-footer footerEdited u-remove-border" style={{ height: '50px' }} />
				</div>
			</div>
		</div>
	);
};
export default Login;
