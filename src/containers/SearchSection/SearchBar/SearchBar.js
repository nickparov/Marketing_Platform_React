import React from 'react'
import SearchOption from '../SearchOption/SearchOption';

const SearchBar = (props) => {
  
  const { objects } = props;
  let options = null;

  if(objects.length >= 1) {
    options = objects.map(object => {
      return <SearchOption object={object} key={object.id} selected={props.selected} />
    });
  }

  return (
      options ? 
      <div className="select-area mb-3">
        <select className="form-control" name="country_id">
          <option value={'none'}>Select Country</option>
          { options }
        </select>
      </div>  
      : null
  );
};

export default SearchBar;
