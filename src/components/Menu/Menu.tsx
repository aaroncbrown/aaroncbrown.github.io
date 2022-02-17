import './menu.scss';

interface MenuParams {
    menuOpen: boolean;
    onMenuItemClick: React.MouseEventHandler<HTMLLIElement> | undefined;
}

export default function Menu(params: MenuParams): JSX.Element {
  return (
    <div className={'menu' + (params.menuOpen ? ' active' : '')}>
        <ul>
            <li onClick={params.onMenuItemClick}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={params.onMenuItemClick}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={params.onMenuItemClick}>
                <a href="#works">Works</a>
            </li>
            <li onClick={params.onMenuItemClick}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={params.onMenuItemClick}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
