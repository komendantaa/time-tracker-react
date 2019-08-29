import Task from 'models/Task';
import { TaskActions } from 'constants/tracker';

export const startTracking = (task: Task) => {
  return {
    type: TaskActions.TRACKING_STARTED,
    payload: task,
  };
};

export const updateTaskName = (taskName: string) => {
  return {
    type: TaskActions.NAME_UPDATED,
    payload: taskName,
  };
};

export const updateProject = (projectName: string) => {
  return {
    type: TaskActions.PROJECT_UPDATED,
    payload: projectName,
  };
};

export const increaseSpentTimeCounter = () => {
  return {
    type: TaskActions.SPENT_TIME_INCREASED,
  };
};

export const stopTracking = () => {
  return {
    type: TaskActions.TRACKING_STOPPED,
  };
};
