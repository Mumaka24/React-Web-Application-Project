// src/components/ComparisonTable.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const ComparisonTable = () => {
  const { quotations } = useSelector((state) => state.insurance);

  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Price</th>
          <th>Coverage</th>
        </tr>
      </thead>
      <tbody>
        {quotations.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.company}</td>
            <td>${quote.price}</td>
            <td>{quote.coverage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
