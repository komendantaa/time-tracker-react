import Task from 'models/Task.class';
import { TASK_TRACKING_STARTED } from 'constants/index';

const test: Task = {
  taskName: 'string',
  projectName: 'string',
  startDate: 'dwadwa',
  spentTime: 123,
  endDate: 'dwadwa',
  inProcess: false,
};

const task = (state: Task = test, action: IAction): any => {
  switch (action.type) {
    case TASK_TRACKING_STARTED:
      return state;
    default:
      return state;
  }
};

export default task;
