import React, { FC } from 'react';
import { Text } from 'react-native';

import { TextInputWithLabel } from '../textInputWithLabel';
import { constants } from '../appContent/constants';

interface PropTypes {
  ipAddress: string;
  city: string;
  isIpOrCityLoading: boolean;
};

export const InfoBlock: FC<PropTypes> = ({ city, ipAddress, isIpOrCityLoading }) => {
  return (
    isIpOrCityLoading
    ? <Text>{constants.loadingText}</Text>
    : <>
        <TextInputWithLabel
          labelText={constants.yourIpLabelText}
          editable={false}
          defaultValue={ipAddress}
        />
        <TextInputWithLabel
          labelText={constants.yourCityLabelText}
          editable={false}
          defaultValue={city}
        />
      </>
  );
};
