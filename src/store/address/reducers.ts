import {
  AddressAction,
  AddressActionTypes as types, GetCityByIpAction,
  GetStreetsByNameAction,
  ToggleStreetsLoading,
  ToggleCityLoading,
} from './types';

interface AddressState {
  city: string,
  streetsList: any[];
  isCityLoading: boolean;
  isStreetsLoading: boolean;
  error: any;
};

const initialState: AddressState = {
  city: '',
  streetsList: [],
  isCityLoading: false,
  isStreetsLoading: false,
  error: null,
};

const reducersMapping = {
  [types.GET_STREETS_BY_NAME]: (state: AddressState, action: AddressAction): AddressState => ({
    ...state,
    streetsList: (action as GetStreetsByNameAction).payload.streetsList,
  }),

  [types.GET_CITY_BY_IP_ADDRESS]: (state: AddressState, action: AddressAction): AddressState => ({
    ...state,
    city: (action as GetCityByIpAction).payload.city,
  }),

  [types.TOGGLE_CITY_LOADING]: (state: AddressState, action: AddressAction): AddressState => ({
    ...state,
    isCityLoading: (action as ToggleCityLoading).payload.isCityLoading,
  }),

  [types.TOGGLE_STREETS_LOADING]: (state: AddressState, action: AddressAction): AddressState => ({
    ...state,
    isStreetsLoading: (action as ToggleStreetsLoading).payload.isStreetsLoading,
  }),
};

export const addressReducer = (state = initialState, action: AddressAction) =>
  reducersMapping[action.type] ? reducersMapping[action.type](state, action) : state;

