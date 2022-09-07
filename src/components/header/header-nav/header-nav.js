import './header-nav.css';

const HeadeNav = () =>{
    return (
        <div className="navigation">
            <div className="container">
                <ul className="menu">
                    <li className="menu_item"><a href="#catalog" className="menu_link">Каталог</a></li>
                    <li className="menu_item"><a href="#require" className="menu_link">Акции</a></li>
                    <li className="menu_item"><a href="#require" className="menu_link">Калькулятор</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">О нас</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">Доставка/оплата</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">Филиалы</a></li>
                </ul>
            </div>
        </div>
    );
}

export default HeadeNav;