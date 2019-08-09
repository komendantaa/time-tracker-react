import { TASK_TRACKING_STARTED } from 'constants/index';

const counter = (counter = 0, action: { type: string }) => {
  switch (action.type) {
    case TASK_TRACKING_STARTED:
      return counter + 1;
    default:
      return counter;
  }
};

export default counter;
