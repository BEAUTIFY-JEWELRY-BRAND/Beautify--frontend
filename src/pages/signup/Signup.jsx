import { useState } from 'react';
import {LandingPageHeader } from '../../components/header/Header'
import { useNavigate, Link } from 'react-router-dom';
import {auth, googleProvider} from '../../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth'
import './signup.css'
export const Signup = (props) => {
    const navigate = new useNavigate();
    const [doesPasswordMatch, setDoesPasswordMatch] = useState(true);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const SignupWithEmail = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            console.log("please check that the password is correct")
            return false
        }
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
                navigate("/shop")
            })
        }catch(err){
            console.log(err)
        }
        
    }
    const SignupWithGoogle = async (e) => {
        e.preventDefault();
        try{
            await signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                console.log(userCredential);
                navigate("/shop")
            })
        }catch(err){
            console.log(err)
        }
        
    }
    const logout = async (e) => {
        e.preventDefault();
        await signOut(auth)
        .then(() => {
            navigate("/signup")
        })        
    }
    return(
        <div className="signup">
            <LandingPageHeader value={"Login"}/>
            <div className='signup-form-container'>
                <div className='signup-form-wrapper'>
                    <h1>Shop Like A Star</h1>
                    <form onSubmit={e=>SignupWithEmail(e)}>
                        <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)} required/>
                        <input type="password" placeholder="Confirm password..." onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        <button id='get_started' onClick={e=>SignupWithEmail(e)}>Get Started</button>
                        <p>Or</p>
                        <button id='get-started-with-google' onClick={(e)=>SignupWithGoogle(e)}>Signup With Google</button>
                        <article>Already have an account? <Link to="/login">Login</Link></article>
                        <button onClick={e=>logout(e)}>logout</button>
                    </form>
                    
                </div>
            </div>
            
            
        </div>
    )
}
