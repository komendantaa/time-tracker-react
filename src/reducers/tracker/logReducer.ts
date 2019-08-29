import { LOG_TASK_ADDED } from 'constants/logs';

const initialState: ILog = {
  tasks: [
    {
      id: 1,
      taskName: 'Working on creating time tracking application',
      projectName: 'timer',
      startDate: '2018-03-21T17:43:18.919Z',
      spentTime: 1232133,
      endDate: '2019-08-12T09:38:30.704Z',
      inProcess: false,
    },
    {
      id: 2,
      taskName: 'Setup the basic react with task runners',
      projectName: 'timer',
      startDate: '2018-03-21T17:43:18.919Z',
      spentTime: 8883,
      endDate: '2019-08-12T09:38:30.704Z',
      inProcess: false,
    },
    {
      id: 3,
      taskName: 'Configure the github repository',
      projectName: 'timer',
      startDate: 'Tue Aug 13 2019 15:39:42 GMT+0300 (Eastern European Summer Time)',
      spentTime: (+new Date('Tue Aug 13 2019 16:03:32 GMT+0300 (Eastern European Summer Time)') - +new Date('Tue Aug 13 2019 15:39:42 GMT+0300 (Eastern European Summer Time)'))/1000,
      endDate: 'Tue Aug 13 2019 16:03:32 GMT+0300 (Eastern European Summer Time)',
      inProcess: false,
    },
  ],
};

console.log((+new Date('Tue Aug 13 2019 16:03:32 GMT+0300 (Eastern European Summer Time)') - +new Date('Tue Aug 13 2019 15:39:42 GMT+0300 (Eastern European Summer Time)'))/1000);

const log = (state: ILog = initialState, action: IAction): any => {
  switch (action.type) {
    case LOG_TASK_ADDED:
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default log;
