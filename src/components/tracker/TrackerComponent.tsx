import React, { FormEvent } from 'react';
import { connect } from 'react-redux';

import Task from 'models/Task';
import { startTracking } from 'actions';
import { TrackerServiceConsumer } from 'context/trackerServiceContext';
import { TrackerService } from 'helpers/trackerService';
import { getFormattedCounter } from 'helpers';

import './tracker-coponent.scss';

interface IProps {
  currentTask?: Task;
}

class TrackerComponent extends React.PureComponent<IProps> {
  onSubmit = (
    isInProcess: boolean,
    { startTracking, stopTracking }: TrackerService
  ) => (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    isInProcess ? stopTracking() : startTracking(null);
  };

  render() {
    const { currentTask = new Task() } = this.props;

    return (
      <TrackerServiceConsumer>
        {(trackerService: TrackerService) => {
          const { projects, onInputTaskName, onSelectProject } = trackerService;
          return (
            <div className="panel row">
              <form
                className="form-inline"
                onSubmit={this.onSubmit(currentTask.inProcess, trackerService)}
              >
                <div className="form-group">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you working on"
                      required
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
                    {projects.map(({ id, title }) => (
                      <option key={id} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <h3>{getFormattedCounter(currentTask.spentTime)}</h3>
                </div>

                <div className="form-group">
                  {!currentTask.inProcess ? (
                    <div className="col-md-offset-2 col-md-8">
                      <button className="btn btn-success" type="submit">
                        Start
                      </button>
                    </div>
                  ) : (
                    <div className="col-md-offset-2 ">
                      <button className="btn btn-danger" type="submit">
                        <div
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                        />
                        Stop
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          );
        }}
      </TrackerServiceConsumer>
    );
  }
}

const mapStateToProps = ({ currentTask }: IState) => {
  return { currentTask };
};

const mapDispatchToProps = {
  startTracking,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerComponent);
