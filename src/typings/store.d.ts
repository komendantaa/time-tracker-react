interface IState {
  log: ILog;
  currentTask?: Task;
  authReducer?: IAuthRegFormProps;
}

interface IAction {
  type: string;
  payload?: any;
}
