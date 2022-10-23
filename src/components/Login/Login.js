import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();

      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from,{replace:true});
    }

    const handelUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title '>Login</h2>

                <form onSubmit={handelUserSignIn} >
                <label htmlFor="email">Email</label>
                <div className="input-group">
                    <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                </div>
                <label htmlFor="password">Password</label>
                <div className="input-group">
                    <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
                </div>
                 
                 <p style={{color:'red'}}>
                    {error?.message}
                  
                 </p>
                 {
                        loading && <p>Loading......</p>
                    }


                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='link-p'>
                    New to eOrange ?
                     
                     <Link className="link" to= "/signup"> Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;