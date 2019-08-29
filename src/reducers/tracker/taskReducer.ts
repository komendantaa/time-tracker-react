import Task from 'models/Task';
import { TaskActions } from 'constants/tracker';

const currentTask = (state: Task = new Task(), action: IAction): Task => {
  switch (action.type) {
    case TaskActions.TRACKING_STARTED:
      return { ...action.payload };
    case TaskActions.NAME_UPDATED:
      return {
        ...state,
        taskName: action.payload,
      };
    case TaskActions.PROJECT_UPDATED:
      return {
        ...state,
        projectName: action.payload,
      };
    case TaskActions.SPENT_TIME_INCREASED:
      return {
        ...state,
        spentTime: state.spentTime + 1,
      };
    case TaskActions.TRACKING_STOPPED:
      return new Task();
    default:
      return state;
  }
};

export default currentTask;
