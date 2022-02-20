import './portfolio-item.scss';

export interface PortfolioItemParams {
    imageSrc: string;
    imageAlt: string;
    title: string;
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function PortfolioItem(params: PortfolioItemParams) {
  return (
    <div className='portfolio-item' onClick={params.onClick}>
        <img src={params.imageSrc} alt={params.imageAlt} />
        <div className='item-title'>{params.title}</div>
    </div>
  )
}
