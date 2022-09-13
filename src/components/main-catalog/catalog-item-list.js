import './catalog-item-list.css'


import CatalogItem from "./catalog-item";
import TestItems from './ztest-items';

const CatalogItemList = ({data}) => {
    const elements = data.map(item =>{
        const {id,...itemProp} = item;
        return (
            <CatalogItem key={id} {...itemProp}/>
        )
    })
    return(
        <section className="catalog">
            <div className="container">
                <div className="row">
                    <div>
                    <h2 className ='hcatalog'><a name="catalog">Каталог</a></h2>
                    </div>
                    {elements}
                    
                </div>
            </div>
        </section>
    )
}

export default CatalogItemList;
