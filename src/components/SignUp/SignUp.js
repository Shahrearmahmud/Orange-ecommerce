import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {

    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    const [confirmPassword,setConfirmPassword] = useState ('');
    const [error,setError] = useState ('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/home')
    }

    const handleCreateUser = event =>{
        event.preventDefault ();
        if(password !== confirmPassword){
            setError('Your two password  match');
            return;
        }
        if (password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email,password);
    }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title '>Sign Up</h2>

            <form onSubmit={handleCreateUser} >
            <label htmlFor="email">Email</label>
            <div className="input-group">
                <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
            </div>
            <label  htmlFor="password">Password</label>
            <div className="input-group">
                <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
            </div>

            <label  htmlFor="confirm-Password">Confirm Password</label>
            <div className="input-group">
                <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required />
            </div>

            <p style={{color:'red'}}>
                {error}
            </p>

            <input className='form-submit' type="submit" value="SignUp" />


            </form>
            <p className='link-p'>
               Already have an account ?
                 
                 <Link className="link" to= "/login"> Login</Link>
            </p>
        </div>
    </div>
    );
};

export default SignUp;