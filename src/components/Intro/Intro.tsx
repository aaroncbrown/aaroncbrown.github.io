import './intro.scss';

/**
 * Gets the intro background based on the aspect ratio.
 * @param aspectRatio the ration of screen width to screen height.
 * @returns The intro background as a JSX.Element.
 */
function getIntroBackground(aspectRatio: number): JSX.Element {
  if (aspectRatio <= 1) {
    // Portrait mode (i.e. smart phones).
    return <img src='images/angels-landing-summit-3024x3024.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture' />;
  }

  // Add 2 to numerator of 1920 by 1080 to allow for strange decimal behavior.
  if (aspectRatio <= (1922 / 1080)) {
    // Standard monitors.
    return <img src='images/angels-landing-summit-4032x1977.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture fit-picture' />;
  }

  // Wider than 16 by 9 aspect ratio (i.e. ultrawide monitors).
  return <img src='images/angels-landing-summit-4032x1079.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture fit-picture' />;
}

export default function Intro(): JSX.Element {
  const aspectRatio = window.innerWidth / window.innerHeight;

  return (
    <div id='intro' className='intro'>
        {getIntroBackground(aspectRatio)}
        <div className={'intro-text' + (aspectRatio < 1.3 ? ' portrait' : '')}>
          <span>Hello, I'm</span>
          <span><span className='first-name'>Aaron</span> <span className='last-name'>Brown</span></span>
          <span>Software Developer</span>
        </div>
        <a href='#portfolio' className={aspectRatio <= .6 ? 'portrait-down-arrow' : ''}>
          <img src='images/black-down-arrow.png' alt='blackdown arrow' />
        </a>
    </div>
  )
}
