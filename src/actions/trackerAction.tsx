import Task from 'models/Task.class';
import {
  TASK_NAME_UPDATED,
  TASK_PROJECT_UPDATED,
  TASK_SPENT_TIME_INCREASED,
  TASK_TRACKING_STARTED,
  TASK_TRACKING_STOPPED,
} from '../constants';

export const startTracking = (task: Task) => {
  return {
    type: TASK_TRACKING_STARTED,
    payload: task,
  };
};

export const updateTaskName = (taskName: string) => {
  return {
    type: TASK_NAME_UPDATED,
    payload: taskName,
  };
};

export const updateProject = (projectName: string) => {
  return {
    type: TASK_PROJECT_UPDATED,
    payload: projectName,
  };
};

export const increaseSpentTimeCounter = () => {
  return {
    type: TASK_SPENT_TIME_INCREASED,
  };
};

export const stopTracking = () => {
  return {
    type: TASK_TRACKING_STOPPED,
  };
};
