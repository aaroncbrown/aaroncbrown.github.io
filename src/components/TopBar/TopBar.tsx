import './top-bar.scss'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface TopBarParams {
  menuOpen: boolean;
  onHamburgerClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function TopBar(params: TopBarParams): JSX.Element {
  const aspectRatio = window.screen.width / window.screen.height;

  return (
    <div className={'top-bar' + (params.menuOpen ? ' active' : '')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            <img src='images/logo512.png' alt="Aaron's site logo." />
          </a>
          <div className={'item-container-wrapper' + (aspectRatio < .6 ? ' display-none' : '')}>
            <div className='item-container'>
              <MailIcon className='icon' />
              <span>aaroncbrown@gmail.com</span>
            </div>
            <div className='item-container'>
              <LinkedInIcon className='icon' />
              <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/aaron-brown-305036a1/'>LinkedIn Profile</a>
            </div>   
          </div> 
        </div>
        <div className='right'>
          <div className="hamburger" onClick={params.onHamburgerClick}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
