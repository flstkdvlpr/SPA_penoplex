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
        models: "Пеноплэкс Основа",
        descr: "Теплоизоляция внешних и внутренних ограждающих конструкций."
		    }
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
