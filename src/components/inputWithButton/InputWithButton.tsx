import React, { FC, useState } from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  Text,
  TextInput,
  View
} from 'react-native';

import { accentColor, activeAccentColor } from '../../styles/constants';
import { styles } from '../../styles/mainStyles';

interface PropTypes {
  buttonText: string;
  buttonClickHandler: (inputValue: string) => void;
  changeTextHandler?: (inputValue: string) => void;
  editable?: boolean;
};

export const InputWithButton: FC<PropTypes> = (props) => {
  const { buttonText, buttonClickHandler, changeTextHandler, editable = true } = props;
  const [searchText, setSearchText] = useState<string>('');

  const onChangeText = (text: string) => {
    if (/^[А-Яа-яA-Za-z]*$/.test(text)) {
      setSearchText(text);
    }

    if (changeTextHandler) {
      changeTextHandler(text);
    }
  }

  const onPressButton = () => {
    if (searchText.trim()) {
      buttonClickHandler(searchText);
    }
  };

  const pressableColorChange = (pressedState: PressableStateCallbackType) => ([
    {
      backgroundColor: pressedState.pressed ? activeAccentColor : accentColor,
    },
    styles.searchButton,
  ]);

  return (
    <View style={styles.search}>
      <View style={{ flex: 4 }}>
        <TextInput
          editable={editable}
          selectTextOnFocus={editable}
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={searchText}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Pressable style={pressableColorChange} onPress={onPressButton}>
          <Text style={styles.searchButtonText}>
            {buttonText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};