import Task from 'models/Task';
import store from 'config/store';
import {
  startTracking,
  stopTracking,
  updateTaskName,
  updateProject,
  increaseSpentTimeCounter,
  addTaskToLog,
} from 'actions';
import { MS_IN_SECOND } from 'constants/duration';

class TrackerService {
  private _intervalId!: NodeJS.Timeout;
  projects: IProject[] = [
    { id: 1, title: '...' },
    { id: 2, title: 'timer' },
    { id: 3, title: 'nothing' },
    { id: 4, title: 'third' },
  ];

  startTracking = (closedTask?: Task | null) => {
    let { currentTask } = store.getState();

    if (currentTask.inProcess) return;

    // Add new or duplicate existed
    if (closedTask && (!closedTask.inProcess || closedTask.endDate)) {
      currentTask = new Task(closedTask.taskName, closedTask.projectName);
    }

    currentTask.inProcess = true;
    currentTask.startDate = new Date().toISOString();

    store.dispatch(startTracking(currentTask));

    this._intervalId = setInterval(() => {
      store.dispatch(increaseSpentTimeCounter());
    }, MS_IN_SECOND);
  };

  stopTracking = () => {
    const currentTask = { ...store.getState().currentTask };

    const currDate = new Date();
    // normalize spent time before push to log
    currentTask.spentTime = +(
      (+currDate - +new Date(currentTask.startDate)) /
      MS_IN_SECOND
    ).toFixed(0);
    currentTask.endDate = currDate.toISOString();

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
