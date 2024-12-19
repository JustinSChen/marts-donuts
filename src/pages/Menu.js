import React from 'react';
import DonutCard from '../components/DonutCard';

const donuts = [
  { id: 1, name: 'Glazed Donut', description: 'Classic glazed donut', price: 1.99, image: '/images/glazed.jpg' },
  { id: 2, name: 'Chocolate Donut', description: 'Rich chocolate donut', price: 2.49, image: '/images/chocolate.jpg' },
  // Add more donuts as needed
];

const Menu = () => {
  return (
    <div class="pdf">
              <iframe
          src="https://marts-donuts.s3.us-east-1.amazonaws.com/menu.pdf"
          width="100%"
          height="100%"
          title="PDF Viewer"
        ></iframe>
    </div>
  );
};

export default Menu;
