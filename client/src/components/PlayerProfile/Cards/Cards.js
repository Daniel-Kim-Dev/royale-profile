import React from 'react';
import './Cards.css';

function Cards(props) {
  //Displays all the player's cards in order from highest level and also any cards they are missing.
  function displayCards() {
    //Sort the player's cards array in descending order of card levels.
    props.playerCards.sort(function(a, b) {
      return props.recalculateLevel(b.maxLevel, b.level) - props.recalculateLevel(a.maxLevel, a.level);
    });

    const elementsArr = [];
    const categorizedCardsMap = getCategorizedCardsByLevel();

    categorizedCardsMap.forEach((cardArr, level) => {
      elementsArr.push(
        <div key={level} className="CardsLevelContainer">
          <h3 className="CardsLevelHeading">Level {level} (Count: {cardArr.length})</h3>
          <hr />
          {cardArr.map((card, index) => {
            return <img key={index} src={card.url} width="40" alt={card.name} />;
          })}
        </div>
      );
    })

    //Check to see if player has missing cards by comparing both array sizes.
    if (props.cards.length !== props.playerCards.length) {
      const cardsNotFoundArr = getCardsNotFound();

      elementsArr.push(
        <div key={'CardsNotFoundKey'} className="CardsLevelContainer">
          <h3 className="CardsLevelHeading">Cards Not Found (Count: {cardsNotFoundArr.length})</h3>
          <hr />
          {cardsNotFoundArr.map((card, index) => {
            return <img key={index} className="CardsNotFound" src={card.url} width="40" alt={card.name} />;
          })}
        </div>
      );
    }

    return elementsArr;
  }

  /* Inserts cards from a sorted array into a hash map with the card level being the key
     and the value being an array of URLs of the card images corresponding to the level. */
  function getCategorizedCardsByLevel() {
    const categorizedCardsMap = new Map();
    let currentLevel;
    let recalculatedLevel;
    
    props.playerCards.forEach(card => {
      recalculatedLevel = props.recalculateLevel(card.maxLevel, card.level);

      if (currentLevel !== recalculatedLevel) {
        currentLevel = recalculatedLevel;
        categorizedCardsMap.set(currentLevel, [{url: card.iconUrls.medium, name: card.name}]);
      } else {
          const updatedArr = categorizedCardsMap.get(currentLevel);
          updatedArr.push({url: card.iconUrls.medium, name: card.name});
          categorizedCardsMap.set(currentLevel, updatedArr);
      }
    })

    return categorizedCardsMap;
  }

  /* Inserts all the player's cards into a map with the card id being the key. Then loops
     through the cards array to check if a card id is missing to determine a card not found. */
  function getCardsNotFound() {
    const cardsMap = new Map();
    const cardsNotFoundArr = [];

    props.playerCards.forEach(card => {
      cardsMap.set(card.id);
    })

    props.cards.forEach(card => {
      if (!cardsMap.has(card.id)) {
        cardsNotFoundArr.push({url: card.iconUrls.medium, name: card.name});
      }
    })

    return cardsNotFoundArr;
  }
  
  return (
    <div className="Cards">
      <h2>Cards</h2>
      <div className="CardsContainer">
        {Array.isArray(props.cards) && props.cards.length > 0 &&
         Array.isArray(props.playerCards) && props.playerCards.length > 0
          ? displayCards()
          : <p>None</p>
        }
      </div>
    </div>
  );
}

export default Cards;