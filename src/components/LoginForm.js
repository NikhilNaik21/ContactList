
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


      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Contact Manager Application</h4>
                    </div>

                    <form>
                <div className="mb-4">
                  <label htmlFor="form3Example3" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="form3Example4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">The future is bright.</h4>
                    <p className="small mb-0">
                    A contact manager is a software program that enables users to easily store and find contact information, 
                    such as names, addresses, and telephone numbers. They are contact-centric databases that provide a fully integrated approach to tracking all information and communication activities linked to contacts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
