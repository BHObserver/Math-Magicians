import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function QuoteDisplay({ category, apiKey }) {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [category, apiKey]);

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
        Quotes on
        {category}
      </h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}

QuoteDisplay.propTypes = {
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

QuoteDisplay.defaultProps = {
  category: 'happiness',
  apiKey: 'YOUR_DEFAULT_API_KEY',
};

export default QuoteDisplay;
