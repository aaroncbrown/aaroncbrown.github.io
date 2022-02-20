import './works.scss';

export default function Works(): JSX.Element {
  return (
    <div id='works' className='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="left-container">
                <div className="img-container">
                  {/* <img src="" alt="" /> */}
                </div>
                <span className='left-container-title'>Title</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <span className='left-container-projects'>Projects</span>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
