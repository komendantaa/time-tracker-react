import React from 'react';
import { connect } from 'react-redux';

import Task from 'models/Task.class';
import { TrackerService } from 'services/trackerService';
import { TrackerServiceConsumer } from 'hoc/withTrackerService/trackerServiceContext';
import { trackerStarted } from '../../../ actions';

interface IProps {
  log?: Task[];
  click?: any;
  startTracking?(closedTask?: Task): void;
}

const Log = (props: IProps) => {
  const { log = [], startTracking = () => null } = props;
  console.log('LOG', props, startTracking);

  return (
    <TrackerServiceConsumer>
      {({ click }: TrackerService) => {
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
                {log.map((task, i) => {
                  const { taskName, projectName, spentTime, startDate } = task;
                  return (
                    <tr key={i}>
                      <td>{taskName}</td>
                      <td>{projectName}</td>
                      <td onClick={startTracking.bind(null, task)}>></td>
                      <td onClick={click.bind(null, task)}>></td>
                      <td>{spentTime}</td>
                      <td>{startDate}</td>
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
};

const mapStateToProps = ({ log }: IState): any => {
  return { log };
};

// const mapDispatchToProps = (dispatch: any, { startTracking }: IProps) => {
//   return {
//     startTracking,
//   };
// };

const mapDispatchToProps = {
  startTracking: trackerStarted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
