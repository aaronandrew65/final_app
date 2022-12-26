import React, {useState} from 'react'
import {SignIn} from './SignIn'
import { Register } from './Register'

export const Login = () => {
    const [currentForm, setCurrentform] = useState('signin');

    const toggleForm = (formName) => {
        setCurrentform(formName)
    }
  return (
    <div>
        {
            currentForm === 'signin' ? <SignIn onFormSwitch= {toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
    </div>
  )
}

export default Login;