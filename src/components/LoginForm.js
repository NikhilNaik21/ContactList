
// export default LoginForm;
import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import './loginpage.css';
const LoginForm = () => {
  const { dispatch } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlereset = () => {
    // Perform reset logic here
    setEmail('');
    setPassword('');
  };

  const handleLogin = () => {
    // Perform authentication logic here
    if (email === '' && password === '') {
      alert('Field cannot be empty');
    } else if (email === 'Admin' && password === 'Admin') {
      dispatch({ type: 'LOGIN' });
      console.log('Login successful');
    } else {
      console.log('Login failed');
      setErrorMessage('Wrong username or password. Please try again.');
      alert(errorMessage);
    }
  };

  return (
    // <div id='X1'>

    //       <h2>Login</h2>
    //       <form id='X2'>
    //         <label>
    //           Email:
    //           <input
    //             type='email'
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </label>
    //         <br />
    //         <label>
    //           Password:
    //           <input
    //             type='password'
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //         </label>
    //         <br />
    //         <button type='button' onClick={() => { handleLogin(); handlereset(); }}>
    //           Login
    //         </button>
    //       </form>
  
    //</div>

    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form style={{ maxWidth: "400px", margin: "auto" }}>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                required
              />
            </div>
  
            <div className="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
  
            <button id='loginbutton'
              onClick={() => {
                handleLogin();
                handlereset();
              }}
              type="button"
              className="btn btn-primary btn-lg"
              style={{
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                marginTop: "10px", // Added margin top for spacing
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default LoginForm;
