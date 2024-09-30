// src/components/QuotationList.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const QuotationList = () => {
  const { quotations, isLoading, error } = useSelector((state) => state.insurance);

  if (isLoading) return <p>Loading quotations...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="quotation-list">
      {quotations.map((quote) => (
        <li key={quote.id} className="quotation-item">
          <p><strong>Company:</strong> {quote.company}</p>
          <p><strong>Price:</strong> ${quote.price}</p>
          <p><strong>Coverage:</strong> {quote.coverage}</p>
        </li>
      ))}
    </ul>
  );
};

export default QuotationList;
