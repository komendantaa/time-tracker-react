import React from 'react';
import Log from '../tracker/log/Log';
import TrackerInterface from '../tracker/TrackerComponent';

const TrackerPage = () => {
  return (
    <div className="container">
      <hr />
      <TrackerInterface />
      <hr />
      <Log />
    </div>
  );
};

export default TrackerPage;
