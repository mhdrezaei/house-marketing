import React from 'react';
import { useState , useEffect } from 'react';
import { getAuth , updateProfile } from "firebase/auth";
import { updateDoc , doc} from 'firebase/firestore'
import { useNavigate , Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {db} from '../firebase.config'


function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email,
    password : auth.currentUser.password
  });
  const { name , email , password} = formData;
  const [changeDetail , setChangeDetail] = useState(false);

  const onLoguot = () => {
    auth.signOut();
    navigate('/')
    toast.success('You Logged out Successfuly!')

  }

  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== name ){
          await updateProfile(auth.currentUser , {
            displayName : name
          })

          const userRef = doc(db , 'users' , auth.currentUser.uid);
          const update = await updateDoc(userRef , {
            name
          })
          toast.success('Your name changed suuccessfully!')
      }

    } catch (error) {
      toast.error('sorry ,update was unsuccess')
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id] : e.target.value
      }
    })
  }
  return (
    <>
      <div className='profile'>
        <header className='profileHeader'>
        <p className='pageHwader'> my Profile</p>
        <button type='button' className='logOut' onClick={onLoguot}>
          Logout
        </button>
        </header>

        <main>
        <div className='profileDetailsHeader'>
          <p className='profileDetailsText' >Personal Details</p>
          <p className='changePersonalDetails' onClick={() => {
            changeDetail && onSubmit()
            setChangeDetail((prevState) => !prevState)
          }
          } >
            {changeDetail ? 'done' : 'change'}
             </p>
        </div>
        <div className='profileCard'>
          <form>
            <input 
            type='text'
            id='name'
            className={changeDetail ? 'profileNameActive' : 'profileName'}
            disabled={!changeDetail}
            value={name}
            onChange={onChange}
             />
             <input 
            type='text'
            id='email'
            className={changeDetail ? 'profileEmailActive' : 'profileEmail'}
            disabled={!changeDetail}
            value={email}
            onChange={onChange}
             />
          </form>
        </div>
        </main>
      </div>
    </>
  )
}

export default Profile