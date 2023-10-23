/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import { CommonParams } from '../../@types/theme';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      box: {
        color: Colors.onSurface,
        backgroundColor: Colors.surface,
        padding: 10,
      },
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.textGray400,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      },
      primary: Colors.primary,
      background: Colors.background,
      surface: Colors.surface,
      onPrimary: Colors.onPrimary,
      onBackground:Colors.onBackground,
      onSurface: Colors.onSurface,
    }),
  };
}
