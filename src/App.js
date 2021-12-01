import React, { useState } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import { data } from './data.json';

const products = [...data];


function App() {
  const [productList, setProductList] = useState(products);

  const filterByCheckbox = () => {}

  return (
    <div className="App">
      <FilterableProductTable products={productList} filterByCheckBox = {filterByCheckbox}/>
    </div>
  );
}

export default App;
