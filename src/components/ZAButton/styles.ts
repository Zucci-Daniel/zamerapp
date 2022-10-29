import {StyleSheet} from 'react-native';

export const ZAButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(115,115,115,0.6)',
    zIndex: 5,
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 80,
  },
});
