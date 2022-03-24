import React, { FC, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from '../../styles/mainStyles';

interface PropTypes {
  labelText: string;
  editable?: boolean;
  defaultValue?: string;
  submitEditingHandler?: (textValue: string) => void;
}

export const TextInputWithLabel: FC<PropTypes> = (props) => {
  const { labelText, defaultValue = '', editable = true, submitEditingHandler = () => {} } = props;
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');

  const onSubmitEditing = () => {
    submitEditingHandler(inputValue);
  }

  const onChangeText = (textValue: string) => {
    setInputValue(textValue);
  }

  const inputStyles = [
    styles.textInputWithLabel_Input,
    !editable ? styles.textInputWithLabel_InputDisabled : {},
  ];

  return (
    <View style={styles.textInputWithLabel}>
      <Text style={styles.textInputWithLabel_Label}>{labelText}</Text>
      <TextInput
        editable={editable}
        selectTextOnFocus={editable}
        style={inputStyles}
        defaultValue={inputValue}
        onChangeText={onChangeText}
        value={inputValue}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};
