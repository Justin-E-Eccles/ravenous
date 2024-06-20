// src/components/BusinessList.js

import React from 'react';
import Business from './Business';
import styles from './BusinessList.module.css';

// Sample array of businesses (hardcoded for now)
const businesses = [
  {
    id: '1',
    imageSrc: 'https://placehold.it/150x150',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: '2',
    imageSrc: 'https://placehold.it/150x150',
    name: "Tony's Bistro",
    address: '32 Main St',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11201',
    category: 'French',
    rating: 5.0,
    reviewCount: 145
  }
  // Add more businesses as needed
];

const BusinessList = () => {
  return (
    <div className={styles.businessList}>
      {businesses.map(business => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
