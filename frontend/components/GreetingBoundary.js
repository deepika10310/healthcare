import React, { useEffect, useState } from 'react';
import { getGreeting } from '../services/greetingService';

/**
 * Boundary component – decides *when* we need a greeting and *why*.
 * It orchestrates the action (API call) via the service and renders the result.
 */
const GreetingBoundary = () => {
  const [greeting, setGreeting] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        // The service now returns the message string on success
        const message = await getGreeting();
        setGreeting(message);
      } catch (err) {
        // `err` is the error object returned by the service
        console.error(err);
        setError(err.error || 'Failed to load greeting');
      }
    };

    fetchGreeting();
  }, []);

  if (error) return <div>{error}</div>;
  if (!greeting) return <div>Loading...</div>;

  return <h1>{greeting}</h1>;
};

export default GreetingBoundary;

