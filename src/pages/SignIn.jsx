import { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg';
import {ReactComponent as VisibilityIcon} from '../assets/svg/visibilityIcon.svg';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function SignIn() {
  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState({
    email : '',
    password : ''
  });
  const {email , password} = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((praveState) => {
      return{
        ...praveState,
        [e.target.id] : e.target.value
      }
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth,email,password);

      if(userCredential.user){
        navigate('/');
      }
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Wellcome back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input 
          type='email'
           className='emailInput'
           id='email'
          placeholder='Email' 
          value={email}
            onChange={onChange}
          />
          <input 
          type={showPassword ? 'text' : 'password'} 
          className='passwordInput'
          id='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
              
            />
          <img 
          src={VisibilityIcon}
           className='showPassword' 
           alt='show password'
           onClick={()=>{setShowPassword(!showPassword)}} />

          <Link 
          to='/forgot-password' 
          className='forgotPasswordLink'
           >Forget your password?</Link>

           <div className='signInBar'>
             <p className='signInText'> Sign in</p>
             <button className='signInButton'> 
             <ArrowRight fill='#fff' width='34px' height='34px'/>
             </button>
           </div>
           
        </form>

        <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>
      </div>
    </>
  )
}

export default SignIn