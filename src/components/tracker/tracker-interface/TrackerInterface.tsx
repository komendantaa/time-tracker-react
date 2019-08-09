import React from 'react';
import Task from 'models/Task.class';
import { trackerStarted } from ' actions';
import { connect } from 'react-redux';
import { TrackerServiceConsumer } from 'hoc/withTrackerService/trackerServiceContext';
import { TrackerService } from 'services/trackerService';

interface IProps {
  currentTask?: Task;
  projects?: string[];
  startTracking?(closedTask?: Task): void;
  stopTracking?(): void;
  onInputTaskName?(ev: any): void;
  onSelectProject?(ev: any): void;
}

class TrackerInterface extends React.PureComponent<IProps, Task> {
  render() {
    return (
      <TrackerServiceConsumer>
        {(trackerService: TrackerService) => {
          const {
            projects,
            startTracking,
            stopTracking,
            onInputTaskName,
            onSelectProject,
          } = trackerService;
          const { currentTask = new Task() } = this.props;
          return (
            <div className="panel row">
              <div className="form-inline">
                <div className="form-group">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you working on"
                      value={currentTask.taskName}
                      onChange={onInputTaskName}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    value={currentTask.projectName}
                    onChange={onSelectProject}
                  >
                    {projects.map((name, i) => (
                      <option key={i} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <h3>{currentTask.spentTime}</h3>
                </div>

                <div className="form-group">
                  {!currentTask.inProcess ? (
                    <div className="col-md-offset-2 col-md-8">
                      <button
                        className="btn btn-success"
                        onClick={startTracking.bind(null, undefined)}
                      >
                        Start
                      </button>
                    </div>
                  ) : (
                    <div className="col-md-offset-2 ">
                      <button
                        className="btn btn-danger"
                        onClick={stopTracking.bind(null, null)}
                      >
                        <div
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                        />
                        Stop
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </TrackerServiceConsumer>
    );
  }
}

const mapStateToProps = ({ currentTask }: IState): any => {
  return { currentTask };
};

const mapDispatchToProps = {
  startTracking: trackerStarted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerInterface);
