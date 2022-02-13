import './top-bar.scss'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Dispatch, SetStateAction } from 'react';

interface TopBarParams {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TopBar({ menuOpen, setMenuOpen }: TopBarParams): JSX.Element {
  return (
    <div className={'top-bar' + (menuOpen ? ' active' : '')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            <img src='images/logo512.png' alt="Aaron's site logo." className='logo-image' />
          </a>
          <div className='itemContainer'>
            <MailIcon className='icon' />
            <span>aaroncbrown@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <LinkedInIcon className='icon' />
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/aaron-brown-305036a1/'>LinkedIn Profile</a>
          </div>
          
        </div>
        <div className='right'>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
