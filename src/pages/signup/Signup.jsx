import { useState } from 'react';
import { Header } from '../../components/header/Header'
import { useNavigate } from 'react-router-dom';
import {auth} from '../../config/firebase'
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import './signup.css'
export const Signup = (props) => {
    const navigate = new useNavigate();
    const [doesPasswordMatch, setDoesPasswordMatch] = useState(true);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getStarted = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            console.log("please check that the password is correct")
            return false
        }
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                props.userStatus(true);
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
            <Header />
            <div className='signup-form-container'>
                <div className='signup-form-wrapper'>
                    <h1>Shop Like A Star</h1>
                    <form onSubmit={e=>getStarted(e)}>
                        <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="password" placeholder="Password..." onChange={(e)=>setPassword(e.target.value)} required/>
                        <input type="password" placeholder="Confirm password..." onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        <button id='get_started' onClick={e=>getStarted(e)}>Get Started</button>
                        <p>Or</p>
                        <button id='get-started-with-google'>Signup With Google</button>
                        <button onClick={e=>logout(e)}>logout</button>
                    </form>
                    
                </div>
            </div>
            
            
        </div>
    )
}