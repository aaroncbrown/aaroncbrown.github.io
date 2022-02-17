import React from 'react'
import './portfolio-list-item.scss'

interface PortfolioListItemParams {
  title: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export default function PortfolioListItem(params: PortfolioListItemParams) {
  return (
    <li className={'portfolio-list-item' + (params.active ? ' active' : '')} onClick={params.onClick}>
        {params.title}
    </li>
  )
}
