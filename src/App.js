import { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import HousePC from './components/house-pc/house-pc';
import CatalogItemList from './components/main-catalog/catalog-item-list';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
			  model: "Пеноплэкс Основа", 
		      descr: "Теплоизоляция внешних и внутренних ограждающих конструкций.", 
		      insale: "В продаже имеется материал с толщиной листа 20, 30, 40, 50, 100 мм.", 
		      application: "Область применения: стены, цоколи и первые этажи конструкций.",
		      price: "8459",
		      currency: "₽",
		      packaging: "м³",
		      id: 1},
          {
			  model: "Пеноплэкс Комфорт®", 
		      descr: "Не для применения в нагруженных конструкциях!", 
		      insale: "В продаже имеется материал с толщиной листа 20, 30, 40, 50, 100 мм.", 
		      application: "Область применения: стены, все виды кровель, чердаки, балконы/лоджии.",
		      price: "7329",
		      currency: "₽",
		      packaging: "м³",
		      id: 2},
			{
			  model: "Пеноплэкс Стена®", 
			  descr: "Для утепления внешних и внутренних ограждающих конструкций.", 
			  insale: "В продаже имеется материал 50 мм и 100 мм.", 
			  application: "Область применения: стены, перегородки, фасады.",
			  price: "7541",
			  currency: "₽",
			  packaging: "м³",
			  id: 3},
			  {
			  model: "Пеноплэкс Фундамент®", 
			  descr: "Для применения в нагруженных конструкциях.", 
			  insale: "В продаже имеется материал 50 мм и 100 мм.", 
			  application: "Область применения: фундамент, оплубка, отмостка, подвал, кровля.",
			  price: "7966",
			  currency: "₽",
			  packaging: "м³",
			  id: 4},
			  {
			  model: "Пеноплэкс Кровля®", 
			  descr: "Теплоизоляция для кровель любых типов.", 
			  insale: "В продаже имеется материал 30 мм, 40 мм, 50 мм, 100 мм.", 
			  application: "Область применения: скатные и плоские кровли.",
			  price: "8136",
			  currency: "₽",
			  packaging: "м³",
			  id: 5},
			  {
			  model: "Пеноплэкс ГЕО®", 
			  descr: "Для использования в нагружаемых конструкциях.", 
			  insale: "В продаже имеется материал 40 мм, 50 мм, 100 мм.", 
			  application: "Область применения: фундамент, кровли, полы, стилобаты.",
			  price: "7925",
			  currency: "₽",
			  packaging: "м³",
			  id: 6}
      ]
    }
  }


  render(){

    return (
      <div className="App">
        <Header />
        <HousePC />
        <CatalogItemList data={this.state.data}/>
      </div>
    );
  }
  
}

export default App;
