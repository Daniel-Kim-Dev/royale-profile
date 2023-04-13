import React from 'react';
import './Badges.css';

function Badges(props) {
  return (
    <div className="Badges">
      <h2 className="BadgesHeading">Badges</h2>
        {Array.isArray(props.badges) && props.badges.length > 0
          ? <div className="BadgesContainer">
              {props.badges.map(badge => {
                //Don't show mastery badges as there's too many and not important.
                if (!badge.name.startsWith("Mastery")) {
                  return (
                    <div key={badge.name} className="Badge">
                      <img src={badge.iconUrls.large} width="100" alt={badge.name} />
                      <span className="BadgeDescription">
                        <h3 className="BadgeName">{badge.name}</h3>
                        <p className="BadgeProgress">Progress: {badge.progress}</p>
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          : <p>None</p>
        }
    </div>
  );
}

export default Badges;