import Task from 'models/Task.class';
import { LOG_TASK_ADDED } from '../constants';

export const addTaskToLog = (task: Task) => {
  return {
    type: LOG_TASK_ADDED,
    payload: task,
  };
};
