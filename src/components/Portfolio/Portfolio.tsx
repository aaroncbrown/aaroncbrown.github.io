import './portfolio.scss';
import PortfolioSectionSelectionItem from '../PortfolioSectionSelectionItem/PortfolioSectionSelectionItem';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { personalPortfolioSectionData, SectionData, workPortfolioSectionData } from './portfolioSectionData';
import portfolioSectionSelectionItemData from './portfolioSectionSelectionItemData';
import { useEffect, useState } from 'react';

export default function Portfolio(): JSX.Element {
  const [selectedSection, setSelectedSection] = useState('work');
  const [sectionData, setSectionData] = useState<SectionData[]>([]);

  useEffect(() => {
    switch(selectedSection) {
      case 'work':
        setSectionData(workPortfolioSectionData);
        break;
      case 'personal':
        setSectionData(personalPortfolioSectionData);
        break;
      default:
        setSectionData([]);
        break;
    }
  }, [selectedSection]);

  return (
    <div id='portfolio' className='portfolio'>
      <div className='section-title'>Portfolio</div>
      <ul>
        {portfolioSectionSelectionItemData.map(item => (
          <PortfolioSectionSelectionItem key={item.id} title={item.title} active={selectedSection === item.id} onClick={() => setSelectedSection(item.id)}/>
        ))}
      </ul>
      <div className='container'>
        {sectionData.map(data => (
          <PortfolioItem title={data.title} imageSrc={data.imageSrc} imageAlt={data.imageAlt} onClick={() => window.open(data.site, '_blank')} />
        ))}
      </div>
    </div>
  )
}
