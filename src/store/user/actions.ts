import { UserAction, UserActionTypes } from './types';
import { Dispatch } from 'redux';
import { getIpAddress } from '../../api/networkApi';

export const getIpAddressThunk = () =>
  async (dispatch: Dispatch<UserAction>) => {
    dispatch(toggleIpAddressLoading(true));

    const { ip } = await getIpAddress();

    dispatch(getIpAddressAction(ip));
    dispatch(toggleIpAddressLoading(false));
  };

const getIpAddressAction = (ipAddress: string): UserAction => ({
  type: UserActionTypes.GET_IP_ADDRESS,
  payload: {
    ipAddress
  },
});

const toggleIpAddressLoading = (isLoading: boolean): UserAction => ({
  type: UserActionTypes.TOGGLE_IP_ADDRESS_LOADING,
  payload: {
    isLoading,
  },
});
