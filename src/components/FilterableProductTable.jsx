import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = ({ products, filterByCheckBox }) => {
  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <input type="checkbox" name="stocked" onChange={handleCheckbox} />
      <label htmlFor="stocked"> Only show products in stock</label>

      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
