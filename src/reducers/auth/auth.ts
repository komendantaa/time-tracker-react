import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION,
  REGISTRATION_SUCCESS,
	REGISTRATION_FAILED,
	LOGOUT_FAILED,
} from 'constants/auth';
import { USER_CREATED } from 'constants/titles';

const INITIAL_STATE = {
  user: null,
  auth_error: null,
  reg_error: null,
  isFetching: false,
  reg_message: '',
};

const authReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isFetching: false,
        auth_error: action.payload,
      };
    }
    case REGISTRATION: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        reg_error: null,
        reg_message: USER_CREATED,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        isFetching: false,
        reg_error: action.payload,
      };
		}
		case LOGOUT_FAILED: {
      return {
        ...state,
        isFetching: false,
        auth_error: action.payload,
      };
    }
    default:
      return INITIAL_STATE;
  }
};

export default authReducer;
