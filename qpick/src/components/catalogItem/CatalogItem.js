import empty_heart from '../../images/icons/hearts/empty_heart.svg';
import star from '../../images/icons/star.svg';

const CatalogItem = ({ item }) => {
    return (
        <div className="catalog_item">
            <div className="catalog_item_top">
                <div className="catalog_item_top_heart">
                    <img src={empty_heart} alt="heart" className="heart-icon" />
                </div>
                <div className="catalog_item_top_image">
                    <img src={item.image} alt="headphones" />
                </div>
                <div className="catalog_item_top_apple">
                    {/* <img src="icons/apple.svg" alt="apple" /> */}
                </div>
            </div>
            <div className="catalog_item_desc">
                <div className="item_name">{item.name}</div>
                <div className="item_price">
                    {item.price} ₴ <br />
                    {/* <span>3527 ₴</span> */}
                </div>
            </div>
            <div className="catalog_item_review">
                <img src={star} alt="star" />
                <span>{item.rating}</span>
            </div>
        </div>
    );
}

export default CatalogItem;