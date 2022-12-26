import React, {useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

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
        <label htmlFor='name'>Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Name' />
        <label htmlFor='email'>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' id='name' name='email' />
        <label htmlFor='password'>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='password' id='password' name='password' />
        <button type='submit'>Register</button>
    </form>
    <button className='link-button' onClick={ () => props.onFormSwitch('signin')} >Already have an account? Lgin here</button>
  
    </div>
    </>
  )
}

