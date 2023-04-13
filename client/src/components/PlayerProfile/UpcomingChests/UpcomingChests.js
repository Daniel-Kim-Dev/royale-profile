import React from 'react';
import './UpcomingChests.css';

function UpcomingChests(props) {
  return (
    <div className="UpcomingChests">
      <h2>Upcoming Chests</h2>
        {Array.isArray(props.upcomingChests) && props.upcomingChests.length > 0
          ? <div className="Timeline">
              {props.upcomingChests.map((chest, index) => {
                return (
                  <div key={index} className="TimelineItem">
                    <div className="TimelineCircle"></div>
                    <div className="TimelineContent">
                      <h3>+{chest.index + 1}</h3>
                      <p>{chest.name}</p>
                    </div>
                  </div>
                );
              })
              }
            </div>
          : <p>None</p>
        }   
    </div>
  );
}

export default UpcomingChests;