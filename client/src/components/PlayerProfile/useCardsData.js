import { useState, useEffect } from 'react';

function useCardsData() {
  const [cards, setCards] = useState();

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/cards', {signal: controller.signal})
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      setCards(data);
    })
    .catch(error => {});

    return () => {
      controller.abort();
    };
  }, []);

  return [cards];
}

export default useCardsData;