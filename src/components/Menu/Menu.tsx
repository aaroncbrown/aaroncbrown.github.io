import { Dispatch, SetStateAction } from 'react';
import './menu.scss';

interface MenuParams {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ menuOpen, setMenuOpen }: MenuParams): JSX.Element {
  return (
    <div className={'menu' + (menuOpen ? ' active' : '')}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
