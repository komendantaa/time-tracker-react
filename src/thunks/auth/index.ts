import {
  loginSuccess,
  loginFailed,
  registrationSuccess,
  registrationFailed,
  logoutFailed,
  logoutSuccess
} from 'actions/auth';
import { LOGIN, REGISTRATION } from 'constants/auth';
import { auth } from 'config/firebaseConfig';

export const loginRequest = (payload: { email: string; password: string, redirect: IHistory }) => {
  const { email, password, redirect } = payload;
  return async (dispatch: any) => {
    try {
      dispatch({ type: LOGIN });
      const request = await auth.signInWithEmailAndPassword(email, password);
      dispatch(loginSuccess(request, redirect));
    } catch (error) {
      dispatch(loginFailed(error));
    }
  };
};

export const registrationRequest = (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;
  return async (dispatch: any) => {
    try {
      dispatch({ type: REGISTRATION });
      const request = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      dispatch(registrationSuccess(request));
    } catch (error) {
      dispatch(registrationFailed(error));
    }
  };
};

export const logoutRequest = (history: IHistory) => {
  return async (dispatch: any) => {
    try{ 
      const request = await auth.signOut();
      dispatch(logoutSuccess({ request, history }))
    } catch(error) {
      dispatch(logoutFailed(error))
    }
  }
}
