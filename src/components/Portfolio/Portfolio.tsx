import './portfolio.scss';

export default function Portfolio(): JSX.Element {
  return (
    <div id='portfolio' className='portfolio'>
      <div className='section-title'>Portfolio</div>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
        <div className='item'>
          <img src='images/skylight-virtual-agent.png' alt='Skylight Virtual Agent' />
          <div className='item-title'>Skylight Virtual Agent</div>
        </div>
      </div>
    </div>
  )
}
