import React from 'react';
import './PlayerProfile.css';
import useCardsData from './useCardsData';
import usePlayerData from './usePlayerData';
import usePlayerUpcomingChests from './usePlayerUpcomingChests';
import Loader from './../Loader/Loader';
import SearchContainer from './../SearchContainer/SearchContainer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import NavBar from './../NavBar/NavBar';
import Info from './Info/Info';
import Deck from './Deck/Deck';
import Badges from './Badges/Badges';
import UpcomingChests from './UpcomingChests/UpcomingChests';
import Cards from './Cards/Cards';
import Stats from './Stats/Stats';

function PlayerProfile({ match }) {
  const [cards] = useCardsData();
  const [playerData, isLoading, invalidPlayerTag] = usePlayerData(match.params.playerTag);
  const [upcomingChests] = usePlayerUpcomingChests(match.params.playerTag);

  //Checks to see if the player data property exists. Will return 'None' if property returns undefined.
  function checkValidData(property, defaultValue = 'None') {
    try {
      //Checks to see if property is a single string and not an array.
      if (typeof property === 'string') {
        if (typeof playerData[property] === 'string' ||
            typeof playerData[property] === 'number' ||
            Array.isArray(playerData[property])) {
            return playerData[property];
        }

        return defaultValue;
      }

      //Property is in a nested JSON object, so runs a loop on the array passed in the function argument.
      let tempPlayerData = playerData;
      property.forEach(p => {
        tempPlayerData = tempPlayerData[p];
      });

      if (typeof tempPlayerData === 'string' || typeof tempPlayerData === 'number') {
        return tempPlayerData;
      } else {
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  }

  /*
  The Clash Royale API still uses the outdated level system where each card rarity had different max levels.
  This function calculates each level to the current system where every card rarity's max level is 14.
  */
  function recalculateLevel(maxLevel, level) {
    return 14 - (maxLevel - level);
  }

  //Returns how many cards a player has found out of the total cards.
  function getCardsFound() {
    return playerData.cards.length + ' / ' + cards.items.length;
  }

  if (!playerData && !invalidPlayerTag) {
    return (
      <div className="LoaderContainer">
        <Loader customClass="BigLoader" />
      </div>
    );
  } else if (!playerData && invalidPlayerTag) {
      return (
        <div className="CenterSearchContainer">
          <SearchContainer
            invalidPlayerTag={invalidPlayerTag}
            isLoading={isLoading}
          />
        </div>
      );
  } else {
      return (
        <div className="PlayerProfile">
          <ScrollToTop />
          <NavBar
            invalidPlayerTag={invalidPlayerTag}
            isLoading={isLoading}
          />
          <main className="MainContent">
            <Info checkValidData={checkValidData} />
            <Badges badges={checkValidData('badges')} />
            <Deck currentDeck={checkValidData('currentDeck')} recalculateLevel={recalculateLevel} />
            {cards &&
              <Cards cards={cards.items} playerCards={checkValidData('cards')} recalculateLevel={recalculateLevel} />
            }
            {cards &&
              <Stats checkValidData={checkValidData} getCardsFound={getCardsFound} />
            }            
            {upcomingChests &&
              <UpcomingChests upcomingChests={upcomingChests.items}/>
            }       
          </main>
        </div>
      );
    }
}

export default PlayerProfile;