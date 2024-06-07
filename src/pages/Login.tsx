import React, { useState ,useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/Rectangle 34624940.png';
import headerImage from '../assets/image 6.png';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
     useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const token = await userCredential.user.getIdToken();
                dispatch(setToken(token));
                navigate('/tracker'); // Redirect to Tracker page
            })
            .catch((error) => {
                setError(error.message); // Set error message
                console.error('Error logging in:', error);
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
                    <div className="header-image-container">
                        <img src={headerImage} alt="Header" />
                    </div>
                    <h2>Login</h2>
                    <p>Enter your registered Email ID to continue</p>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="button" className="social-login transparent">
                            Sign up with Google
                        </button>
                        <button type="button" className="social-login transparent">
                            Sign up with Twitter
                        </button>
                        <p>
                            Having trouble logging in? <a href="/signup">Sign Up</a>
                        </p>
                        <button type="submit" className="continue-button" disabled={loading}>
                            {loading ? 'Loading...' : 'Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;