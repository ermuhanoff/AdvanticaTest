import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';

import { useAppSelector } from '../../store/hooks';
import { StreetItem } from '../streetItem';
import { constants } from '../appContent/constants';

export const StreetsList = () => {
  const { streetsList, isStreetsLoading } = useAppSelector((state) => state.address);

  const streetsListWithLoading = (
    isStreetsLoading
    ? <Text>{constants.loadingText}</Text>
    : <FlatList
      data={streetsList}
      renderItem={(itemInfo) =>
        <StreetItem streetName={itemInfo.item} />
      }
      keyExtractor={(street) => street}
    />
  );

  return (
    <ScrollView horizontal={true}>
      {
        streetsList.length
        ? streetsListWithLoading
        : <Text>{constants.noDataText}</Text>
      }
    </ScrollView>
  );
};