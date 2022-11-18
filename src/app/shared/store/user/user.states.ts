export interface UserLoginState {
  loading: boolean;
  success: boolean;
  fail: boolean;
  userName: string;
}
export interface UserState {
  login: UserLoginState;
}
