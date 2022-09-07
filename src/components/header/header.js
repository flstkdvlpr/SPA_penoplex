import './header.css';
import HeadeNav from './header-nav/header-nav';
import Hamburger from './header-hamburger/hamburger';
import HousePC from '../house-pc/house-pc';

const Header = () =>{
    return(
        <header>
            <HeadeNav />
            <Hamburger />
            <HousePC />
        </header>
    )
}

export default Header;