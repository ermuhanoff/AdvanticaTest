import {
  GetIpAddress, ToggleIpAddressLoading,
  UserAction,
  UserActionTypes as types,
} from './types';

interface UserState {
  ipAddress: string;
  isLoading: boolean;
};

const initialState: UserState = {
  ipAddress: '',
  isLoading: false,
};

const reducersMapping = {
  [types.GET_IP_ADDRESS]: (state: UserState, action: UserAction): UserState => ({
    ...state,
    ipAddress: (action as GetIpAddress).payload.ipAddress,
  }),

  [types.TOGGLE_IP_ADDRESS_LOADING]: (state: UserState, action: UserAction): UserState => ({
    ...state,
    isLoading: (action as ToggleIpAddressLoading).payload.isLoading,
  }),
};

export const userReducer = (state = initialState, action: UserAction) =>
  reducersMapping[action.type] ? reducersMapping[action.type](state, action) : state;

