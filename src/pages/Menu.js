import React from 'react';
import DonutCard from '../components/DonutCard';

const donuts = [
  { id: 1, name: 'Glazed Donut', description: 'Classic glazed donut', price: 1.99, image: '/images/glazed.jpg' },
  { id: 2, name: 'Chocolate Donut', description: 'Rich chocolate donut', price: 2.49, image: '/images/chocolate.jpg' },
  // Add more donuts as needed
];

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {donuts.map(donut => (
          <DonutCard key={donut.id} donut={donut} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
