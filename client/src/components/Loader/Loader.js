import React from 'react';
import './Loader.css';

function Loader(props) {
  return (
    <div className={`Loader ${props.customClass}`}></div>
  );
}

export default Loader;