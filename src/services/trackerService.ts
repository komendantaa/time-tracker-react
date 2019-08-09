import Task from 'models/Task.class';
import store from '../config/store';
import { trackerStarted } from '../ actions';
import { clearInterval, setInterval } from 'timers';

class TrackerService {
  private _intervalId!: NodeJS.Timeout;
  projects = ['...', 'timer', 'nothing', 'third'];
  state: any = {
    currentTask: new Task(),
    log: [],
  };

  constructor() {
    console.log('new TrackerService instance created');
  }

  click(task: Task) {
    console.log(task, 'click');
    store.dispatch(trackerStarted(task));
  }

  setState(some: any) {
    console.log(some);
  }

  startTracking = (closedTask?: Task) => {
    let { currentTask } = this.state;

    // Add new or duplicate exist
    if (closedTask && (!closedTask.inProcess || closedTask.endDate)) {
      currentTask = new Task(closedTask.taskName, closedTask.projectName);
    }

    this.setState({
      currentTask: {
        ...currentTask,
        inProcess: true,
        startDate: new Date(),
      },
    });

    this._intervalId = setInterval(() => {
      // this.setState((state) => return {.......}); !!!!!!!!!!!!!!!!!!!!!!!!!
      this.setState({
        currentTask: {
          ...this.state.currentTask,
          spentTime: this.state.currentTask.spentTime + 1,
        },
      });
    }, 1000);
  };

  stopTracking = () => {
    const { currentTask, log } = this.state;

    currentTask.inProcess = false;
    currentTask.endDate = new Date();

    //  !!!!!!!!!!!!!!!!!!!!!!!!
    log.push(currentTask);

    this.setState({
      currentTask: new Task(),
      log: [...log],
    });
    clearInterval(this._intervalId);
  };

  onInputTaskName = ({ target }: any) => {
    this.setState({
      currentTask: { ...this.state.currentTask, taskName: target.value },
    });
  };

  onSelectProject = ({ target }: any) => {
    this.setState({
      currentTask: { ...this.state.currentTask, projectName: target.value },
    });
  };
}

const trackerServiceInstance = new TrackerService();

export { trackerServiceInstance, TrackerService };
