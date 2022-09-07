import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  let navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My LoginPage</span>
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
