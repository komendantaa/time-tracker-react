import React from 'react';
import { connect } from 'react-redux';

import { TrackerService } from 'helpers/trackerService';
import { TrackerServiceConsumer } from 'context/trackerServiceContext';
import { getFormattedDate, getFormattedCounter } from 'helpers';
import { DATE_FORMAT } from 'constants/date';
import Task from 'models/Task';

interface IProps {
  tasks?: Task[];
}

class Log extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    const { tasks = [] } = this.props;
    return (
      <TrackerServiceConsumer>
        {({ startTracking }: TrackerService) => {
          return (
            <>
              <h2>Today</h2>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Project</th>
                    <th>Duplicate</th>
                    <th>Spent time</th>
                    <th>Time range</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => {
                    const {
                      id,
                      taskName,
                      projectName,
                      spentTime,
                      startDate,
                      endDate,
                    } = task;
                    return (
                      <tr key={id}>
                        <td>{taskName}</td>
                        <td>{projectName}</td>
                        <td onClick={startTracking.bind(null, task)}>></td>
                        <td>{getFormattedCounter(spentTime)}</td>
                        <td>
                          {getFormattedDate(startDate, DATE_FORMAT)}
                          {' - '}
                          {getFormattedDate(endDate, DATE_FORMAT)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        }}
      </TrackerServiceConsumer>
    );
  }
}

const mapStateToProps = ({ log: { tasks } }: IState) => {
  return { tasks };
};

export default connect(mapStateToProps)(Log);
