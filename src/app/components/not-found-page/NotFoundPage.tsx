import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <span role="img" aria-label="Crying Face">
        😢
      </span>
      <p>Page not found.</p>
    </>
  );
}
