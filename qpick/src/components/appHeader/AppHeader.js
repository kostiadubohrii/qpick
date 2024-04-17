import './appHeader.scss';
import heart from '../../images/icons/header/heart.svg';
import trolley from '../../images/icons/header/trolley.svg';
import user from '../../images/icons/user.svg';

const AppHeader = () => {
    return (
        <div className="header">
            <div className="header_distributor">
                <a href="index.html" className="logo">QPICK</a>
            </div>

            <div className="header_distributor">
                <form method="POST" className="search">
                    <input type="text" name="search" className="search" id="search" placeholder="search" />
                    <input type="submit" value="" className="find" />
                </form>
            </div>

            <div className="header_distributor">
                <div className="header_manipulator">
                    <a href="#">
                        <img src={heart} alt="heart" />
                        <div className="fav-items-counter">
                            1
                        </div>
                    </a>
                    <a href="#">
                        <img src={trolley} alt="trolley" />
                        <div className="basket-items-counter">
                            1
                        </div>
                    </a>
                    <a href="#" className='user' >
                        <img src={user} alt="user" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;