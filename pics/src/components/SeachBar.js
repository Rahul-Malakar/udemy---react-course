import './searchBar.css'
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
//very important not to use document.querySelector, take control of the term from browser by using state

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) =>{ 
    setTerm(event.target.value);
  }

  return (
    <div className='SearchBar'>
      <label >Search for pictures</label>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value = {term}  onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
