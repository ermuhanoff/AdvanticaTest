import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from '../../styles/mainStyles';

interface PropTypes {
  streetName: string;
}

export const StreetItem: FC<PropTypes> = ({ streetName }) => {
  return <Text style={styles.streetItem}>{streetName}</Text>;
};
