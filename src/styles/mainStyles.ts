import { Dimensions, StyleSheet } from 'react-native';
import {
  accentColor,
  accentTextColor,
  mainBorderRadius,
  mainBorderWidth,
  mainColor, mainTextColor,
  subTextColor,
  disableTextColor,
} from './constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    backgroundColor: mainColor,
  },

  textInputWithLabel: {
    width: '100%',
    marginBottom: 10,
  },

  textInputWithLabel_Label: {
    fontSize: 24,
    color: subTextColor,
    marginBottom: 10,
  },

  textInputWithLabel_Input: {
    padding: 5,
    borderRadius: mainBorderRadius,
    borderColor: subTextColor,
    borderWidth: 1,
    fontSize: 24,
    color: subTextColor,
  },

  textInputWithLabel_InputDisabled: {
    backgroundColor: disableTextColor,
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderWidth: mainBorderWidth,
    borderColor: accentColor,
    borderRadius: mainBorderRadius,
    backgroundColor: mainColor,
  },

  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },

  searchButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchButtonText: {
    color: accentTextColor,
    fontSize: 20,
  },

  streetItem: {
    width: '100%',
    fontSize: 20,
    paddingVertical: 10,
  },
});
