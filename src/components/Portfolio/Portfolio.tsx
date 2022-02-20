import './portfolio.scss';
import PortfolioSectionSelectionItem from '../PortfolioSectionSelectionItem/PortfolioSectionSelectionItem';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { useState } from 'react';

export default function Portfolio(): JSX.Element {
  const [selected, setSelected] = useState('work');

  const list = [
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'personal',
      title: 'Personal',
    }
  ];

  return (
    <div id='portfolio' className='portfolio'>
      <div className='section-title'>Portfolio</div>
      <ul>
        {list.map(item => (
          <PortfolioSectionSelectionItem key={item.id} title={item.title} active={selected === item.id} onClick={() => setSelected(item.id)}/>
        ))}
      </ul>
      <div className='container'>
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
        <PortfolioItem title='Skylight Virtual Agent' imageSrc='images/skylight-virtual-agent.png' imageAlt='Skylight Virtual Agent' />
      </div>
    </div>
  )
}
