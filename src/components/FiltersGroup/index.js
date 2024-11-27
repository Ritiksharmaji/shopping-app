import { BsSearch } from 'react-icons/bs';
import './index.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const FiltersGroup = (props) => {
  const { ratingsList, categoryOptions, changeRating, activeRatingId, changeCategory, activeCategoryId, enterSearchInput, changeSearchInput, searchInput, clearFilters } = props;

  const { isDarkTheme } = useContext(CartContext); // Consuming the context
  const textClass = isDarkTheme ? 'text-light' : 'text-dark'; // Get the theme-based class
  const headingClass = isDarkTheme ? 'heading-light' : 'heading-dark'; 
  

  const onEnterSearchInput = (event) => event.key === 'Enter' && enterSearchInput();

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={(e) => changeSearchInput(e.target.value)}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  );

  const renderRatingsFiltersList = () => (
    ratingsList.map((rating) => (
      <li
        className="rating-item"
        key={rating.ratingId}
        onClick={() => changeRating(rating.ratingId)}
      >
        <img
          src={rating.imageUrl}
          alt={`rating ${rating.ratingId}`}
          className="rating-img"
        />
        <p className={`and-up ${activeRatingId === rating.ratingId ? 'active-rating' : ''}`}> & up</p>
      </li>
    ))
  );

  const renderCategoriesList = () => (
    categoryOptions.map((category) => (
      <li
        className="category-item"
        key={category.categoryId}
        onClick={() => changeCategory(category.categoryId)}
      >
        <p
          className={`category-name ${category.categoryId === activeCategoryId ? 'active-category-name' : ''} ${textClass}`}
        >
          {category.name}
        </p>
      </li>
    ))
  );

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <div>
        <h1 className={`category-heading ${headingClass}`}>Category</h1>
        <ul className="categories-list">{renderCategoriesList()}</ul>
      </div>
      <div>
        <h1 className={`rating-heading ${headingClass}`}>Rating</h1>
        <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
      </div>
      <button type="button" className="clear-filters-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersGroup;
