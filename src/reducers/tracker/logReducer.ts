import Task from 'models/Task.class';
import { LOG_TASK_ADDED } from 'constants/index';

const initialState: Task[] = [
  {
    id: 1,
    taskName: 'Working on creating time tracking application',
    projectName: 'timer',
    startDate: '2018-03-21T17:43:18.919Z',
    spentTime: 123,
    endDate: '2019-08-12T09:38:30.704Z',
    inProcess: false,
  },
  {
    id: 2,
    taskName: 'Setup the basic react with task runners',
    projectName: 'timer',
    startDate: '2018-03-21T17:43:18.919Z',
    spentTime: 123,
    endDate: '2019-08-12T09:38:30.704Z',
    inProcess: false,
  },
  {
    id: 3,
    taskName: 'Configure the github repository',
    projectName: 'timer',
    startDate: '2018-03-21T17:43:18.919Z',
    spentTime: 123,
    endDate: '2019-08-12T09:38:30.704Z',
    inProcess: false,
  },
];

const log = (state: Task[] = initialState, action: IAction): any => {
  switch (action.type) {
    case LOG_TASK_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default log;
