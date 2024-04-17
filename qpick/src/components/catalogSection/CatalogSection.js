import CatalogItem from "../catalogItem/CatalogItem";

const CatalogSection = ({ items, title }) => {
    return (
        <>
            <div className="title">{title}</div>
            <div className="catalog">
                {items.map((item) => (
                    <CatalogItem item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}

export default CatalogSection;