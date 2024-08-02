import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

const DonutCard = ({ donut }) => {
  return (
    <Card>
      <img src={donut.image} alt={donut.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{donut.name}</h3>
      <p>{donut.description}</p>
      <p>${donut.price.toFixed(2)}</p>
    </Card>
  );
};

export default DonutCard;
