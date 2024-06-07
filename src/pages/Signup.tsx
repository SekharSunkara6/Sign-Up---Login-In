import React, { useState ,useEffect} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from 'antd';
import './Signup.css';
import logo from '../assets/Rectangle 34624940.png';
import headerImage from '../assets/image 6.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
     useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const handleSignup = (e:any) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const token = await userCredential.user.getIdToken();
                dispatch(setToken(token));
                navigate('/login');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    return (
    <div className="signup-container">
        <div className="sections-container">
            <div className="left-section">
                <p>WELCOME TO</p>
                <div className="logo-container">
                    <img src={logo} alt="Breathe ESG" />
                </div>
                <p>We help you track your organisations <br></br>
                metrics as per the ESG Guidelines</p>
                <p>
                    Sounds Interesting? <a href="#">Get in touch!</a>
                </p>
            </div>
            <div className="right-section">
                <img src={headerImage} alt="Header" />
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Continue
                    </Button>
                </form>
                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    </div>
);
};

export default Signup;