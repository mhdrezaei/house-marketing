import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {getAuth , sendPasswordResetEmail } from 'firebase/auth'
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';


function ForgotPassword() {
  const [email , setEmail] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Recovery Link was sent!')


    } catch (error) {
      toast.error('somthing went wrong!')
    }
  }
  const onChange = e => setEmail(e.target.value); 

  return (
    <div className='pageContainer' >
    <header>
      <p className='paheHeader' >Forget Password</p>
    </header>
    <main>
      <form onSubmit={onSubmit} >
      <input 
      type='email'
      className='emailInput'
      placeholder='Email'
      value={email}
      onChange={onChange}
      />
      <Link 
          to='/sign-in' 
          className='forgotPasswordLink'
           >Sign in</Link>

           <div className='signInBar'>
             <p className='signInText'> Sign in</p>
             <button className='signInButton'> 
             <ArrowRight fill='#fff' width='34px' height='34px'/>
             </button>
           </div>

      </form>
    </main>


    </div>
  )
}

export default ForgotPassword