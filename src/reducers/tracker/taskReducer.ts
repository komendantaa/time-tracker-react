import Task from 'models/Task.class';
import {
  TASK_SPENT_TIME_INCREASED,
  TASK_NAME_UPDATED,
  TASK_PROJECT_UPDATED,
  TASK_TRACKING_STARTED,
  TASK_TRACKING_STOPPED,
} from 'constants/index';

const currentTask = (state: Task = new Task(), action: IAction): Task => {
  switch (action.type) {
    case TASK_TRACKING_STARTED:
      return action.payload;
    case TASK_NAME_UPDATED:
      return {
        ...state,
        taskName: action.payload,
      };
    case TASK_PROJECT_UPDATED:
      return {
        ...state,
        projectName: action.payload,
      };
    case TASK_SPENT_TIME_INCREASED:
      return {
        ...state,
        spentTime: state.spentTime + 1,
      };
    case TASK_TRACKING_STOPPED:
      return new Task();
    default:
      return state;
  }
};

export default currentTask;
