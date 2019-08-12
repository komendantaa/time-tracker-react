import Task from 'models/Task.class';
import store from 'config/store';
import {
  startTracking,
  stopTracking,
  updateTaskName,
  updateProject,
  increaseSpentTimeCounter,
  addTaskToLog,
} from 'actions';

class TrackerService {
  private _intervalId!: NodeJS.Timeout;
  projects = ['...', 'timer', 'nothing', 'third'];

  constructor() {
    console.log('new TrackerService instance created');
  }

  startTracking = (closedTask?: Task) => {
    let { currentTask } = store.getState();

    // Add new or duplicate existed
    if (closedTask && (!closedTask.inProcess || closedTask.endDate)) {
      currentTask = new Task(closedTask.taskName, closedTask.projectName);
    }

    currentTask.inProcess = true;
    currentTask.startDate = new Date().toISOString() + '';

    store.dispatch(startTracking(currentTask));

    this._intervalId = setInterval(() => {
      store.dispatch(increaseSpentTimeCounter());
    }, 1000);
  };

  stopTracking = () => {
    const { currentTask } = store.getState();
    currentTask.endDate = new Date().toISOString();

    store.dispatch(stopTracking());
    store.dispatch(addTaskToLog(currentTask));
    clearInterval(this._intervalId);
  };

  onInputTaskName = ({ target }: any) =>
    store.dispatch(updateTaskName(target.value));

  onSelectProject = ({ target }: any) =>
    store.dispatch(updateProject(target.value));
}

const trackerServiceInstance = new TrackerService();

export { trackerServiceInstance, TrackerService };
