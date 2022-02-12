import './intro.scss';

export default function Intro(): JSX.Element {
  return (
    <div id='intro' className='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src='images/angels-landing-summit.jpg' alt="Angel's Landing Summit" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Aaron Brown</h1>
          <h3>Software Engineer</h3>
        </div>
        <a href='#portfolio'>
          <img src='images/down-arrow.png' alt='down arrow' />
        </a>
      </div>
    </div>
  )
}
