import { useState } from 'react';
import { LandingPageHeader } from '../../components/header/Header'
import { useNavigate, Link } from 'react-router-dom';
import {auth, googleProvider} from '../../config/firebase'
import {signInWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth'
import './login.css'

export const Login = (props) => {
    const navigate = new useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const loginWithEmail = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
                navigate("/shop");
            }); 
        }catch(err){
            console.log(err);
        }
    }
    const loginWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                console.log(userCredential);
                navigate("/shop");
            })
        }catch(err){
            console.log(err);
        }
    }
    
    const logout = async (e) => {
        e.preventDefault();
        await signOut(auth)
        .then(() => {
            navigate("/login");
        })        
    }

    return(
        <div className="login">
            <LandingPageHeader />
            <div className='login-form-container'>
                <div className='login-form-wrapper'>
                    <h1>Login for a better exerience</h1>
                    <form onSubmit={e=>loginWithEmail(e)}>
                        <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)} required/>
                        <button id='get_started' onClick={e=>loginWithEmail(e)}>Login</button>
                        {/* <p>Or</p> */}
                        <button id='get-started-with-google' onClick={(e)=>loginWithGoogle(e)}>Login With <span>Google</span></button>
                        <article>Don't yet have an account? <Link to="/signup">Signup</Link></article>
                        <button onClick={e=>logout(e)}>logout</button>
                    </form>
                    
                </div>
            </div>
            
            
        </div>
    )
}
