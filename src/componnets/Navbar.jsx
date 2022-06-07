import React from 'react';
import {useNavigate , useLocation} from 'react-router-dom';
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ProfileIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const matchLocation = (route) => {
        if(route === location.pathname){
            return true
        }
    }
  return (
    <footer className='navbar'>
    <nav className='navbarNav'>
        <ul className='navbarListItems'>
            <li className='navbarListItem' onClick={() => navigate('/')}>
                <ExploreIcon fill={matchLocation('/') ? '#2c2c2c' : '#9c9c9c'} width='35px' height='35px' />
                <p className={matchLocation('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/offers')}>
                <OfferIcon fill={matchLocation('/offers') ? '#2c2c2c' : '#9c9c9c'} width='35px' height='35px' />
                <p className={matchLocation('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offers</p>
            </li>
            <li className='navbarListItem' onClick={() => navigate('/profile')}>
                <ProfileIcon fill={matchLocation('/profile') ? '#2c2c2c' : '#9c9c9c'} width='35px' height='35px' />
                <p className={matchLocation('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
            </li>
        </ul>
    </nav>

    </footer>
  )
}

export default Navbar