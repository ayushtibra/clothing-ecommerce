import React, { useState, useEffect } from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default HomePage;
