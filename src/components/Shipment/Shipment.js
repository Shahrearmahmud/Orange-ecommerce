import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value);
    }


    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>

                <form onSubmit={handleCreateUser} >
                    <label htmlFor="name">Your Name</label>
                    <div className="input-group">
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <label htmlFor="email">Your Email</label>
                    <div className="input-group">
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>

                    <label htmlFor="password">Current Address</label>
                    <div className="input-group">
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>

                    <label htmlFor="Phone">Phone Number</label>
                    <div className="input-group">

                        <input onBlur={handlePhoneBlur} type="text" name="Phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="Submit" value="Add Shipping" />

                </form>
            </div>
        </div>
    );
};

export default Shipment;