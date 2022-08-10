import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My HomePage</span>
      <button
        onClick={() => {
          navigate('/game');
        }}
      >
        Game
      </button>
    </div>
  );
}
