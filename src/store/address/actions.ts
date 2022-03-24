import { AddressAction, AddressActionTypes } from './types';
import { Dispatch } from 'redux';
import { getCityByIp, getStreetsByName } from '../../api/networkApi';

export const getStreetsByNameThunk = (addressName: string) =>
  async (dispatch: Dispatch<AddressAction>) => {
    dispatch(toggleStreetsLoading(true));

    const streetsList = await getStreetsByName(addressName);

    const mappedStreetsList = streetsList.suggestions.map((data: any) => data.value);

    dispatch(getStreetsByNameAction(mappedStreetsList));
    dispatch(toggleStreetsLoading(false));
  };

export const getCityByIpThunk = (ipAddress: string) =>
  async (dispatch: Dispatch<AddressAction>) => {
    dispatch(toggleCityLoading(true));

    const data = await getCityByIp(ipAddress);

    dispatch(getCityByIdAction(data.location.data.city));
    dispatch(toggleCityLoading(false));
  };

export const getStreetsByNameAction = (streetsList: any[]): AddressAction => ({
  type: AddressActionTypes.GET_STREETS_BY_NAME,
  payload: {
    streetsList,
  },
});

const getCityByIdAction = (city: string): AddressAction => ({
  type: AddressActionTypes.GET_CITY_BY_IP_ADDRESS,
  payload: {
    city,
  },
});

const toggleCityLoading = (isCityLoading: boolean): AddressAction => ({
  type: AddressActionTypes.TOGGLE_CITY_LOADING,
  payload: {
    isCityLoading,
  },
});

const toggleStreetsLoading = (isStreetsLoading: boolean): AddressAction => ({
  type: AddressActionTypes.TOGGLE_STREETS_LOADING,
  payload: {
    isStreetsLoading,
  },
});

