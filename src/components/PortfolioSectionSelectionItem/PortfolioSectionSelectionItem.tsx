import React from 'react'
import './portfolio-section-selection-item.scss'

interface PortfolioSectionSelectionItemParams {
  title: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export default function PortfolioSectionSelectionItem(params: PortfolioSectionSelectionItemParams) {
  return (
    <li className={'portfolio-list-item' + (params.active ? ' active' : '')} onClick={params.onClick}>
        {params.title}
    </li>
  )
}
