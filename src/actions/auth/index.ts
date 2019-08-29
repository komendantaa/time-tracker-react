import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED
} from 'constants/auth';

export const loginSuccess = (
  payload: any,
  redirect: IHistory
) => {
  const { user } = payload;
  localStorage.setItem('token', user.uid);
  localStorage.setItem('user_email', user.email);
  redirect.push('/main');
  return {
    payload,
    type: LOGIN_SUCCESS,
  };
};

export const loginFailed = (payload: any) => {
  return {
    payload,
    type: LOGIN_FAILED,
  };
};

export const registrationSuccess = (payload: any) => {
  return {
    payload,
    type: REGISTRATION_SUCCESS,
  };
};

export const registrationFailed = (payload: any) => {
  return {
    payload,
    type: REGISTRATION_FAILED,
  };
};

export const logoutSuccess = (payload: { request: any, history: IHistory }) => {
  const { history } = payload;
  localStorage.removeItem('token');
  localStorage.removeItem('user_email');
  history.push('/');
  return {
    type: LOGOUT_SUCCESS
  }
}

export const logoutFailed = (payload: any) => {
  return {
    payload,
    type: LOGOUT_FAILED
  }
}
