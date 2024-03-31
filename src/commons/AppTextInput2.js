import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const AppTextInput2 = (props) => {
  const { title, err, styles, value, onChangeText, iconLeft, placeholder, borderColor } = props;
  return (
    <View style={ styles.container }>
      { title && <Text style={ styles.title }>{ title }</Text> }
      <TextInput
        style={ [styles.input, { borderColor: borderColor }] } // Ghi đè màu border
        value={ value }
        onChangeText={ onChangeText }
        placeholder={ placeholder }
      />
      { iconLeft && <Image source={ iconLeft } style={ { width: 20, height: 20 } } /> }
      { err && <Text style={ styles.err }>{ err }</Text> }
    </View>
  )
}

export default AppTextInput2;
