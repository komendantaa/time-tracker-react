class Task {
  taskName: string;
  projectName: string;
  startDate: any;
  spentTime: number;
  endDate: any;
  inProcess: boolean = false;

  constructor(taskName: string = '', projectName: string = '...') {
    this.taskName = taskName;
    this.projectName = projectName;
    this.spentTime = 0;
  }
}

export default Task;
