import React from 'react';
import { connect } from 'react-redux';

import Task from 'models/Task.class';
import { TrackerService } from 'services/trackerService';
import { TrackerServiceConsumer } from 'hoc/withTrackerService/trackerServiceContext';
import { getFormattedDate, getFormattedCounter } from 'helpers';
import { DATE_FORMAT } from 'constants/index';

interface IProps {
  log?: Task[];
}

const Log = ({ log = [] }: IProps) => {
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
                  <th>Continue</th>
                  <th>Spent time</th>
                  <th>Time range</th>
                </tr>
              </thead>
              <tbody>
                {log.map((task) => {
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
};

const mapStateToProps = ({ log }: IState): any => {
  return { log };
};

export default connect(mapStateToProps)(Log);
