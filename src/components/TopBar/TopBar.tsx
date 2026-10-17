import './top-bar.scss'

interface TopBarParams {
  menuOpen: boolean;
  onHamburgerClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function TopBar(params: TopBarParams): JSX.Element {
  return (
    <div className={'top-bar' + (params.menuOpen ? ' active' : '')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            <img src='images/logo512.png' alt="Aaron's site logo." />
          </a>
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
