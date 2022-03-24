import { AddressActionTypes } from '../address/types';

export enum UserActionTypes {
  GET_IP_ADDRESS            = 'GET_IP_ADDRESS',
  TOGGLE_IP_ADDRESS_LOADING = 'TOGGLE_IP_ADDRESS_LOADING',
};

export interface GetIpAddress {
  type: UserActionTypes.GET_IP_ADDRESS;
  payload: {
    ipAddress: string;
  }
};

export interface ToggleIpAddressLoading {
  type: UserActionTypes.TOGGLE_IP_ADDRESS_LOADING;
  payload: {
    isLoading: boolean;
  };
}

export type UserAction = GetIpAddress | ToggleIpAddressLoading;