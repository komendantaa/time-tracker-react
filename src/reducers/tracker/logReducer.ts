import Task from 'models/Task.class';

const test: Task[] = [
  {
    taskName: 'string',
    projectName: 'string',
    startDate: 'dwadwa',
    spentTime: 123,
    endDate: 'dwadwa',
    inProcess: false,
  },
  {
    taskName: 'string',
    projectName: 'string',
    startDate: 'dwadwa',
    spentTime: 123,
    endDate: 'dwadwa',
    inProcess: false,
  },
  {
    taskName: 'string',
    projectName: 'string',
    startDate: 'dwadwa',
    spentTime: 123,
    endDate: 'dwadwa',
    inProcess: false,
  },
  {
    taskName: 'string',
    projectName: 'string',
    startDate: 'dwadwa',
    spentTime: 123,
    endDate: 'dwadwa',
    inProcess: false,
  },
  {
    taskName: 'string',
    projectName: 'string',
    startDate: 'dwadwa',
    spentTime: 123,
    endDate: 'dwadwa',
    inProcess: false,
  },
];

const log = (state: Task[] = test, action: { type: string }): any => {
  switch (action.type) {
    // case 'TASK_TRACKING_STARTED':
    //   console.log('dwadwa');
    //   return state;
    default:
      return state;
  }
};

export default log;
