import './portfolio.scss';
import PortfolioListItem from '../PortfolioListItem/PortfolioListItem';
import { useState } from 'react';

export default function Portfolio(): JSX.Element {
  const [selected, setSelected] = useState('featured');

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  return (
    <div id='portfolio' className='portfolio'>
      <div className='section-title'>Portfolio</div>
      <ul>
        {list.map(item => (
          <PortfolioListItem title={item.title} active={selected === item.id} onClick={() => setSelected(item.id)}/>
        ))}
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
