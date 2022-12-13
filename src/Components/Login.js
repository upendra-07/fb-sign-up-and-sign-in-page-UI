import React from 'react';

function Login(){
    return(
        <div className='main'>
            <div className="header">
                <h1 id="heading">facebook</h1>
            </div>

            <form className='log-form'>
                <div className="login-box">
                    <p>Log in to Facebook</p>
                </div>

                <div className='input-box'>
                    <input type="text" id="user-name" placeholder ='Email address or phone number' required/><br></br>
                    <input type="password" id = "password" placeholder='Password' required/>
                </div>

                <div className='log-btn'>
                    <button id ='login-button'>Log in</button>
                </div>
                <span id="forgot-acc">Forgotten account?</span>
                <h5><span>or</span></h5>

                <div className='create-acc'>
                    <button id ="create-acc-btn">Create New Account</button>
                </div>
            </form>

        </div>
    )
}

export default Login;