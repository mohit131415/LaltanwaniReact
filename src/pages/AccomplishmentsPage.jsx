import React from 'react';
import AccomplishmentsScene from '../components/AccomplishmentsScene';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import PositionsHeld from '../components/PositionsHeld'; // Import the PositionsHeld component

const AccomplishmentsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <AccomplishmentsScene />
        <PositionsHeld /> {/* Render PositionsHeld component at the end */}
      </div>
    </div>
  );
};

export default AccomplishmentsPage;
