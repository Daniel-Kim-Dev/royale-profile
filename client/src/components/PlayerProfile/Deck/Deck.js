import React from 'react';
import './Deck.css';

function Deck(props) {
  return (
    <div className="Deck">
      <h2 className="DeckHeading">Deck</h2>
      <div className="DeckCardsContainer">
        {Array.isArray(props.currentDeck) && props.currentDeck.length > 0
          ? props.currentDeck.map(card => {
              return (
                <div key={card.id} className="DeckCard">
                  <img className="CardImage" src={card.iconUrls.medium} width="100" alt={card.name} />
                  <p className="DeckCardLevel">Lvl {props.recalculateLevel(card.maxLevel, card.level)}</p>
                </div>
              );
            })
          : <p>None</p>
        }
      </div>
    </div>
  );
}

export default Deck;