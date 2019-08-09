import React from 'react';
import { trackerServiceInstance } from 'services/trackerService';
// import TrackerService from 'services/trackerService';

const {
  Provider: TrackerServiceProvider,
  Consumer: TrackerServiceConsumer,
} = React.createContext(trackerServiceInstance);

// console.log(React.createContext(TrackerService as any));

export { TrackerServiceProvider, TrackerServiceConsumer };
