import './portfolio-item.scss';

interface PortfolioItemParams {
    imageSrc: string;
    imageAlt: string;
    title: string
}

export default function PortfolioItem(params: PortfolioItemParams) {
  return (
    <div className='portfolio-item'>
        <img src={params.imageSrc} alt={params.imageAlt} />
        <div className='item-title'>{params.title}</div>
    </div>
  )
}
