import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');
export const extraContainerSize = 120;
export const detectTouch = {top: 40, right: 40, left: 40, bottom: 10};

export const bigIcon = {height: 50, width: 50};
export const smallIcon = {height: 40, width: 40};
export const squareIcon = {height: 20, width: 20};
export const miniImageSize = width / 10;
export const galleryImageSize = width / 2;

export const colors = {
  dark: '#000',
  imageBox: '#004',
  gray: 'gray',
  white: '#fff',
};
