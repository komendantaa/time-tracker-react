import React from 'react';
import Task from 'models/Task.class';

interface IProps {
  currentTask: Task;
  log: Task[];
  startTracking(closedTask?: Task): void;
}

class Log extends React.PureComponent<IProps> {
  // constructor(props: IProps) {
  //   super(props);
  // }

  render() {
    const { log, startTracking } = this.props;

    return (
      <>
        <h2>Today</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Task</th>
              <th>Project</th>
              <th>Continue</th>
              <th>Spent time</th>
              <th>Time range</th>
            </tr>
          </thead>
          <tbody>
            {log.map((task, i) => (
              <tr key={i}>
                <td>{task.taskName}</td>
                <td>{task.projectName}</td>
                <td onClick={startTracking.bind(null, task)}>></td>
                <td>{task.spentTime}</td>
                <td>{task.startDate + ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default Log;
