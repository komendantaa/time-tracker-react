import React from 'react';

import TrackerInterface from 'components/tracker/tracker-interface/TrackerInterface';
import Log from 'components/tracker/log/Log';
import Task from 'models/Task.class';
import { setInterval, clearInterval } from 'timers';

interface IState {
  currentTask: Task;
  log: Task[];
}

class TrackerContainer extends React.PureComponent<any, IState> {
  private _intervalId!: NodeJS.Timeout;
  projects = ['...', 'timer', 'nothing', 'third'];

  constructor(props: any) {
    super(props);

    this.state = {
      currentTask: {
        taskName: '',
        projectName: '',
        startDate: '',
        spentTime: 0,
        endDate: '',
        inProcess: false,
      },
      log: [],
    };
  }

  componentDidMount() {}

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

    log.push(currentTask);

    this.setState({
      log,
      currentTask: new Task(),
    });
    clearInterval(this._intervalId);
  };

  onSelectProject = ({ target }: any) => {
    this.setState({
      currentTask: { ...this.state.currentTask, projectName: target.value },
    });
  };

  render() {
    return (
      <div className="container">
        <hr />
        <TrackerInterface
          currentTask={this.state.currentTask}
          projects={this.projects}
          startTracking={this.startTracking}
          stopTracking={this.stopTracking}
          onSelectProject={this.onSelectProject}
        />
        <hr />
        <Log {...this.state} startTracking={this.startTracking} />
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }
}
export default TrackerContainer;
