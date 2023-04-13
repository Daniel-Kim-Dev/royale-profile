import { useState, useEffect } from 'react';

function usePlayerUpcomingChests(playerTag) {
  const [upcomingChests, setUpcomingChests] = useState();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/player/${playerTag.toUpperCase()}/upcomingchests`, {signal: controller.signal})
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      setUpcomingChests(data);
    })
    .catch(error => {});

    return () => {
      controller.abort();
    };
  }, [playerTag]);

  return [upcomingChests];
}

export default usePlayerUpcomingChests;