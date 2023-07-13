import React from 'react';

const ErrorPage = ({ statusCode }) => {
  const imageUrl = `https://http.cat/${statusCode}`;

  return (
    <div>
      <h2>Error {statusCode}</h2>
      <img src={imageUrl} alt={`Error ${statusCode}`} />
    </div>
  );
};

export default ErrorPage;
