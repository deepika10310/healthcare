import { getGreeting } from '../services/greetingService';
import React, { useEffect, useState } from 'react';

/**
 * Boundary component – decides *when* we need a greeting and *why*.
 * It orchestrates the action (API call) and renders the result.
 */
const GreetingBoundary = () => {
  const [greeting, setGreeting] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const res = await fetch('/api/greeting');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setGreeting(data.message);
      } catch (err) {
        console.error(err);
        setError('Failed to load greeting');
      }
    };
    fetchGreeting();
  }, []);

  if (error) return <div>{error}</div>;
  if (!greeting) return <div>Loading...</div>;

  return <h1>{greeting}</h1>;
};

export default GreetingBoundary;
