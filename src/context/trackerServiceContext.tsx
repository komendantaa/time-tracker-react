import React from 'react';
import { trackerServiceInstance } from 'helpers/trackerService';

const {
  Provider: TrackerServiceProvider,
  Consumer: TrackerServiceConsumer,
} = React.createContext(trackerServiceInstance);

export { TrackerServiceProvider, TrackerServiceConsumer };
