// File: styles.js
import { StyleSheet } from 'react-native';
import { RED } from '../Lab2/constants/colors';

export const BOX_SIZE = 100;

export default StyleSheet.create({
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: RED,
  },
});
