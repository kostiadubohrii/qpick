import { useState } from "react";
import CatalogSection from "../catalogSection/CatalogSection";
import './catalogList.scss';

const CatalogList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Sony WH-1000XM4', price: 349.99, img: 'https://via.placeholder.com/150', rating: 4.5 },
        { id: 2, name: 'JBL Tune 750BTNC', price: 129.95, img: 'https://via.placeholder.com/150', rating: 3.8 },
        { id: 3, name: 'Sennheiser HD 450BT', price: 199.95, img: 'https://via.placeholder.com/150', rating: 4.2 },
        { id: 4, name: 'Sony WH-1000XM3', price: 299.99, img: 'https://via.placeholder.com/150', rating: 4.7 },
        { id: 5, name: 'JBL Tune 600BTNC', price: 99.95, img: 'https://via.placeholder.com/150', rating: 3.5 },
        { id: 6, name: 'Sennheiser HD 350BT', price: 119.95, img: 'https://via.placeholder.com/150', rating: 4.0 },
    ]);

    return (
        <div className='catalog-list'>
            <CatalogSection title={'Headphones'} items={items} />
        </div>
    );
}

export default CatalogList;
