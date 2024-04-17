import './appFooter.scss';
import instagram from '../../images/icons/social/instagram.svg';
import telegram from '../../images/icons/social/telegram.svg';
import whatsapp from '../../images/icons/social/whatsapp.svg';
import earth from '../../images/icons/earth.svg';


const AppFooter = () => {
    return (
        <div className="footer">
            <div>
                <a href="index.html" className="logo">QPICK</a>
            </div>
            <div>
                <a href="favourites.html" className="links">Улюблене</a>
                <a href="basket.html" className="links">Корзина</a>
                <a href="contacts.html" className="links">Контакти</a>
            </div>
            <div>
                <div className="terms">
                    <a href="terms.html" className="links">Умови сервіса</a>
                    <div>
                        <div className="lengs">
                            <img src={earth} alt="earth" />
                            <p>
                                <span>Укр</span>
                            </p>
                            <p>Eng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={instagram} alt="instagram" className="socials" />
                <img src={telegram} alt="telegram" className="socials" />
                <img src={whatsapp} alt="whatsapp" className="socials" />
            </div>
        </div>
    );
}

export default AppFooter;
