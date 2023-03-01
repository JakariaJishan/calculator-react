import React, { useEffect, useState } from 'react';
import './Quote.css';

function Quote() {
  const [quote, setquote] = useState({});

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setquote(data);
      });
  }, []);

  return (
    <div className="quote">
      {quote.content ? (
        <blockquote>
          &ldquo;
          {quote.content}
          &rdquo; -
          {' '}
          {quote.author}
        </blockquote>
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
}

export default Quote;
