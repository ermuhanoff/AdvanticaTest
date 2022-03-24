export enum AddressActionTypes {
  GET_STREETS_BY_NAME    = 'GET_STREETS_BY_NAME',
  GET_CITY_BY_IP_ADDRESS = 'GET_CITY_BY_IP_ADDRESS',
  TOGGLE_CITY_LOADING    = 'TOGGLE_CITY_LOADING',
  TOGGLE_STREETS_LOADING = 'TOGGLE_STREETS_LOADING',
}

export interface GetStreetsByNameAction {
  type: AddressActionTypes.GET_STREETS_BY_NAME;
  payload: {
    streetsList: any[];
  };
}

export interface GetCityByIpAction {
  type: AddressActionTypes.GET_CITY_BY_IP_ADDRESS;
  payload: {
    city: string;
  };
}

export interface ToggleCityLoading {
  type: AddressActionTypes.TOGGLE_CITY_LOADING;
  payload: {
    isCityLoading: boolean;
  };
}

export interface ToggleStreetsLoading {
  type: AddressActionTypes.TOGGLE_STREETS_LOADING;
  payload: {
    isStreetsLoading: boolean;
  };
}

export type AddressAction =
  GetStreetsByNameAction
  | GetCityByIpAction
  | ToggleCityLoading
  | ToggleStreetsLoading;