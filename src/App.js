import './App.css';

import Header from './components/header/header';
import HousePC from './components/house-pc/house-pc';
import CatalogItem from './components/main-catalog/catalog-item';

function App() {
  return (
    <div className="App">
      <Header />
      <HousePC />
      <CatalogItem />
    </div>
  );
}

export default App;
