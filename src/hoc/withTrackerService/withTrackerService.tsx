import React from 'react';

import { TrackerServiceConsumer } from './trackerServiceContext';

const withTrackerService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <TrackerServiceConsumer>
        {(trackerService: any) => {
          return <Wrapped {...props} trackerService={trackerService} />;
        }}
      </TrackerServiceConsumer>
    );
  };
};

export default withTrackerService;
