import Task from 'models/Task.class';
import { TASK_TRACKING_STARTED } from 'constants/index';

export const trackerStarted = (task: Task) => {
  return {
    type: TASK_TRACKING_STARTED,
    payload: task,
  };
};
