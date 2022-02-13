import './intro.scss';

function getIntroBackground(): JSX.Element {
  if (window.screen.width <= window.screen.height) {
    // Portrait mode (i.e. smart phones).
    return <img src='images/angels-landing-summit-3024x3024.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture' />;
  }

  const aspectRatio = window.screen.width / window.screen.height;

  // Add 2 to numerator of 1920 by 1080 to allow for strange decimal behavior.
  if (aspectRatio <= (1922 / 1080)) {
    // Standard monitors.
    return <img src='images/angels-landing-summit-4032x1977.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture' />;
  }

  // Wider than 16 by 9 aspect ratio (i.e. ultrawide monitors).
  return <img src='images/angels-landing-summit-4032x1079.jpg' alt="Angel's Landing Summit Portrait" className='intro-picture' />;
}

export default function Intro(): JSX.Element {
  return (
    <div id='intro' className='intro'>
        {getIntroBackground()}
        <a href='#portfolio'>
          <img src='images/down-arrow.png' alt='down arrow' />
        </a>
    </div>
  )
}
