import { useState, useEffect } from 'react';

function usePlayerData(playerTag) {
  const [playerData, setPlayerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [invalidPlayerTag, setInvalidPlayerTag] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    fetch(`/api/player/${playerTag.toUpperCase()}`, {signal: controller.signal})
    .then(response => {
      if (!response.ok) {
        setIsLoading(false);
        setInvalidPlayerTag(true);
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      setPlayerData(data);
      setInvalidPlayerTag(false);
      setIsLoading(false);
    })
    .catch(error => {});

    return () => {
      controller.abort();
    };
  }, [playerTag]);

  return [playerData, isLoading, invalidPlayerTag];
}

export default usePlayerData;