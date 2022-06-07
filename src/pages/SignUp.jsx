import { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg';
import {ReactComponent as VisibilityIcon} from '../assets/svg/visibilityIcon.svg';
import { getAuth, createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {db} from '../firebase.config'
import {doc , setDoc , serverTimestamp} from 'firebase/firestore';

function SignUp() {
  const [showPassword , setShowPassword] = useState(false);
  const [formData , setFormData] = useState({
    name : '',
    email : '',
    password : ''
  });
  const {name ,email , password} = formData;
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)  
      const user = userCredential.user;

      updateProfile(auth.currentUser,{
        displayName : name
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db , 'users' , user.uid), formDataCopy);

      navigate('/')

    } catch (error) {
      console.log(error)
    }
    


  }




  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Register Form!</p>
        </header>
        <form onSubmit={onSubmit} >
        <input 
          type='text'
           className='nameInput'
           id='name'
          placeholder='Name' 
          value={name}
            onChange={onChange}
          />
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

           <div className='signInBar'>
             <p className='signInText'> Sign up</p>
             <button className='signInButton'> 
             <ArrowRight fill='#fff' width='34px' height='34px'/>
             </button>
           </div>
           
        </form>

        <Link 
        to='/sign-up' 
        className='registerLink'>Sign in Instead</Link>
      </div>
    </>
  )
}

export default SignUp