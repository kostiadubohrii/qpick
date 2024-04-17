import './productList.scss';

const ProductList = () => {
    return (
        <div className='catalog-list'>
            <div className="title">Навушники</div>
            <div className="catalog">

                <div className="catalog_item">
                    <div className="catalog_item_top">
                        <div className="catalog_item_top_heart">
                            <img src="icons/hearts/empty_heart.svg" alt="heart" className="heart-icon" />
                        </div>
                        <div className="catalog_item_top_image">
                            <img src="images/head-phones_catalog/apple_earpods.png" alt="headphones" />
                        </div>
                        <div className="catalog_item_top_apple">
                            {/* <img src="icons/apple.svg" alt="apple" /> */}
                        </div>
                    </div>
                    <div className="catalog_item_desc">
                        <div className="item_name">Apple BYZ S852I</div>
                        <div className="item_price">
                            2327 ₴ <br />
                            {/* <span>3527 ₴</span> */}
                        </div>
                    </div>
                    <div className="catalog_item_review">
                        <img src="icons/star.svg" alt="star" />
                        <span>4.5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
