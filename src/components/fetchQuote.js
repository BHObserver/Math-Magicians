import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = 'Life'; // Default category
  const apiKey = 'T4jhMp6jkPwaYLrw2IN+dg==9djzc72tDHZm9ypC'; // Default API key

  useEffect(() => {
    if (!apiKey) {
      setError(new Error('API Key is missing.'));
      setLoading(false);
      return;
    }

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setQuotes(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1>
        Quotes on &nbsp;
        {category}
      </h1>
      <span>{quotes[0].quote}</span>
    </div>
  );
}

export default QuoteDisplay;
