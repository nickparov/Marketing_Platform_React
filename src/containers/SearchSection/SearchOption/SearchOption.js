import React from 'react';

const SearchOption = (props) => {
  const { id, name } = props.object;
  return (
    <option value={id} onClick={() => props.selected(id)}>{name}</option>
  );
};

export default SearchOption;
