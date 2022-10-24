import React from 'react';

const ErrorMessage: React.FC<{ type: string }> = ({ type }) => {
  return (
    <span className="message">
      <span className="intro">oops</span>
      <span className="_text-crimson">{type}</span>
    </span>
  );
};

export default ErrorMessage;
