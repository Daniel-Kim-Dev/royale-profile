import React from 'react';
import './SearchContainer.css';
import { useHistory } from 'react-router-dom';
import SearchBar from './../SearchBar/SearchBar';
import { ReactComponent as UserIcon } from './UserIcon.svg';

function SearchContainer(props) {
  const history = useHistory();

  function linkToPlayerProfile() {
    history.push('/player/8U0QCJ2');
  }

  return (
    <div className="SearchContainer">
      <SearchBar
        invalidPlayerTag={props.invalidPlayerTag}
        isLoading={props.isLoading}
        shouldFocus
      />
      <hr className="SearchContainerLine" />
      <p>Don't know a Player Tag? Click here.</p>
      <button className="UserButton" type="button" onClick={linkToPlayerProfile}>
        <UserIcon />
      </button>
    </div>
  );
}

export default SearchContainer;