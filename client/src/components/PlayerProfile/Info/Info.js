import React from 'react';
import './Info.css';
import { ReactComponent as ClanIcon } from './ClanIcon.svg';
import { ReactComponent as ArenaIcon } from './ArenaIcon.svg';
import { ReactComponent as TrophyIcon } from './TrophyIcon.svg';

function Info(props) {
  return (
    <div className="Info">
      <img
        src={props.checkValidData(['currentFavouriteCard', 'iconUrls', 'medium'])}
        width="150"
        alt={props.checkValidData(['currentFavouriteCard', 'name'])}
      />
      <h1 className="PlayerName">{props.checkValidData('name')}</h1>
      <h2 className="PlayerTag">{props.checkValidData('tag')}</h2>
      <div className="InfoContainer">
        <div className="TrophyContainer">
          <TrophyIcon />
          <p>&nbsp;{props.checkValidData('trophies')} / {props.checkValidData('bestTrophies')} (Best)</p>
        </div>
        <div className="ArenaContainer">
          <ArenaIcon />
          <p>&nbsp;{props.checkValidData(['arena', 'name'])}</p>
        </div> 
        <div className="ClanNameContainer">
          <ClanIcon />
          <p>&nbsp;{props.checkValidData(['clan', 'name'])}</p>
        </div>
      </div>  
    </div>
  );
}

export default Info;