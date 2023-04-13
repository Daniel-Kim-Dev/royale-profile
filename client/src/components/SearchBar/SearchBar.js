import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './SearchBar.css';
import { useHistory } from 'react-router-dom';
import { ReactComponent as SearchIcon } from './SearchIcon.svg';
import Loader from './../Loader/Loader';

function SearchBar(props) {
  const [playerTag, setPlayerTag] = useState('');
  const inputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    }
  });

  function handleChange(event) {
    setPlayerTag(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      linkToPlayerProfile();
    }
  }

  function linkToPlayerProfile() {
    if (typeof playerTag !== 'string') {
      return;
    }
    
    const parsedStr = playerTag.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
    
    if (parsedStr !== '') {
      history.push(`/player/${parsedStr}`);
    }
  }

  return (
    <div className="SearchBar">
      <div className="SearchBarContainer">
        <input
          ref={inputRef}
          className="PlayerTagInput"
          type="text"
          value={playerTag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Player Tag"
        />
        <button
          className="SearchButton"
          type="button"
          onClick={linkToPlayerProfile}
        >
          {props.isLoading ? <Loader customClass="SmallLoader" /> : <SearchIcon />}
        </button>
      </div>
      {props.invalidPlayerTag &&
        <p className="InvalidPlayerTagText">Invalid Player Tag</p>
      }
    </div>
  );
}

export default SearchBar;