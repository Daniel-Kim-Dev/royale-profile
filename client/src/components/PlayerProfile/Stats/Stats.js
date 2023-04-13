import React from 'react';
import './Stats.css';

function Stats(props) {
  //Adds up wins and losses and subtract from total games to get total draws.
  function calculateDraws() {
    return props.checkValidData('battleCount') - (props.checkValidData('wins') + props.checkValidData('losses'));
  }

  return (
    <div className="Stats">
      <h2>Stats</h2>
      <table>
        <tbody>
          <tr>
            <th>Battle Stats</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>Total Battles</td>
            <td>{props.checkValidData('battleCount')}</td>
          </tr>
          <tr>
            <td>Wins</td>
            <td>{props.checkValidData('wins')}</td>
          </tr>
          <tr>
            <td>Losses</td>
            <td>{props.checkValidData('losses')}</td>
          </tr>
          <tr>
            <td>Draws & Party Mode Games</td>
            <td>{calculateDraws()}</td>
          </tr>
          <tr>
            <td>Three Crown Wins</td>
            <td>{props.checkValidData('threeCrownWins')}</td>
          </tr>
          <tr className="spacer">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Clan Wars Stats</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>War Day Wins</td>
            <td>{props.checkValidData('warDayWins')}</td>
          </tr>
          <tr>
            <td>Clan Cards Collected</td>
            <td>{props.checkValidData('clanCardsCollected')}</td>
          </tr>
          <tr className="spacer">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Challenge Stats</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>Challenge Max Wins</td>
            <td>{props.checkValidData('challengeMaxWins')}</td>
          </tr>
          <tr>
            <td>Challenge Cards Won</td>
            <td>{props.checkValidData('challengeCardsWon')}</td>
          </tr>
          <tr className="spacer">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Tournament Stats</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>Tournament Total Battles</td>
            <td>{props.checkValidData('tournamentBattleCount')}</td>
          </tr>
          <tr>
            <td>Tournament Cards Won</td>
            <td>{props.checkValidData('tournamentCardsWon')}</td>
          </tr>
          <tr className="spacer">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Card Stats</th>
            <th>Count</th>
          </tr>
          <tr>
            <td>Cards Found</td>
            <td>{props.getCardsFound()}</td>
          </tr>
          <tr>
            <td>Cards Total Donations</td>
            <td>{props.checkValidData('totalDonations')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stats;