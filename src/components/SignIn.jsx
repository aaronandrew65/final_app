import React, {useState} from 'react'
import '../App.css'
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';


export const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(email);

    }

  return (
    <>
    <NavBar />
    <div className='app padding-bottom'>
    <h1><Link to={'/'}>Montoya's Movie Mania</Link></h1>
    
        <form className='login-form' onSubmit={handleSumbit}>
            <label for='email'>email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' id='name' name='email' />
            <label for='password'>password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='password' id='password' name='password' />
            <button type='submit'>Log In</button>
        </form>
        <button className='link-button' onClick={ () => props.onFormSwitch('register')}>Dont have an accout? Register here</button>

        {

        }
      
    </div>
    </>
  )
}

export default SignIn;
