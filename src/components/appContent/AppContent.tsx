import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { StreetsList } from '../streetsList';
import { InputWithButton } from '../inputWithButton';
import {
  getCityByIpThunk,
  getStreetsByNameThunk,
  getStreetsByNameAction
} from '../../store/address/actions';
import { getIpAddressThunk } from '../../store/user/actions';
import { useAppSelector } from '../../store/hooks';
import { constants } from './constants';
import { styles } from '../../styles/mainStyles';
import { InfoBlock } from '../infoBlock';

export const AppContent = () => {
  const { isLoading, ipAddress } = useAppSelector(state => state.user);
  const { isCityLoading, city } = useAppSelector(state => state.address);
  const dispatch = useDispatch();

  const isIpOrCityLoading = isLoading || isCityLoading;

  useEffect(() => {
    dispatch(getIpAddressThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCityByIpThunk(ipAddress));
  }, [isLoading]);

  const onButtonClick = (text: string) => {
    dispatch(getStreetsByNameThunk(`${city} ${text}`))
  }

  const onChangeText = () => {
    dispatch(getStreetsByNameAction([]));
  }

  return (
    <View style={styles.container}>
      <InfoBlock
        city={city}
        ipAddress={ipAddress}
        isIpOrCityLoading={isCityLoading}
      />

      <InputWithButton
        editable={!isIpOrCityLoading}
        buttonText={constants.searchButtonText}
        buttonClickHandler={onButtonClick}
        changeTextHandler={onChangeText}
      />

      <StreetsList />
    </View>
  );
};