import Task from 'models/Task';
import { LOG_TASK_ADDED } from 'constants/logs';

export const addTaskToLog = (task: Task) => {
  return {
    type: LOG_TASK_ADDED,
    payload: task,
  };
};
