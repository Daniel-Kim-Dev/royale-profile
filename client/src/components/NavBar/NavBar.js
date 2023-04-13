import React from 'react';
import './NavBar.css';
import SearchBar from './../SearchBar/SearchBar';
import { ReactComponent as Logo } from './Logo.svg';

function NavBar(props) {
  return (
    <div className="NavBar">
      <a className="Logo" href="/">
        <Logo />
      </a>
      <div className="NavSearchBar">
        <SearchBar
          invalidPlayerTag={props.invalidPlayerTag}
          isLoading={props.isLoading}
        />
      </div>     
    </div>
  );
}

export default NavBar;