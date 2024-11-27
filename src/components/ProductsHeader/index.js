import { BsFilterRight } from 'react-icons/bs';
import './index.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ProductsHeader = (props) => {
  const onChangeSortby = (event) => {
    const { changeSortby } = props;
    changeSortby(event.target.value);
  };

  const { isDarkTheme } = useContext(CartContext); // Consuming the context
  const textClass = isDarkTheme ? 'text-light' : 'text-dark'; // Get the theme-based class
  const headingClass = isDarkTheme ? 'heading-light' : 'heading-dark';

  const { sortbyOptions, activeOptionId } = props;

  return (
    <div className="products-header">
      <h1 className={`products-list-heading ${headingClass} `}>All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className={`sort-by ${headingClass}`}>Sort by</p>
        <select
          className={`sort-by-select ${isDarkTheme ? 'select-dark' : 'select-light'}`}
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map((eachOption) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className={`select-option ${textClass} ${
                activeOptionId === eachOption.optionId ? 'active-sort-option' : ''
              }`}
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
