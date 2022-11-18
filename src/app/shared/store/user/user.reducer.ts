import { UserActions, EUserActions } from './user.actions';
import { UserState, UserLoginState } from './user.states';
const initLoginState: UserLoginState = {
  loading: false,
  success: false,
  fail: false,
  userName: ''
};
const initUserState: UserState = {
  login: initLoginState
};

export function userReducer(state = initUserState, action: UserActions): UserState {
  switch (action.type) {
    case EUserActions.LOGIN:
      return {
         ...state,
       login: { ...initLoginState, initLoginState.loading: true}
  };
case EUserActions.LOGIN_SUCCESS:
  return {
    ...state,
    login: { ...state.login, loading: false, success: true, userName: action.payload  }
  };
case EUserActions.LOGIN_FAIL:
  return {
    ...state,
    login: { ...state.login, loading: false, fail: true }
  };
default:
  return state;
}
}
