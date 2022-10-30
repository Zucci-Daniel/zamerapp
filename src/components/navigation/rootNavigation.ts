import React, {createRef} from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createRef<any>();

const navigate = (name: any, params: any) => {
  navigationRef.current?.navigate(name, params);
};
const replace = (name: any, params: any) => {
  navigationRef.current?.replace(name, params);
};

const replaced = (name: any, params: any) => {
  navigationRef.current?.dispatch({
    ...StackActions.replace(name, params),
  });
};
const goToHome = (name: any, params: any) => {
  navigationRef.current?.dispatch({
    ...StackActions.replace(name, params),
  });
};

export default {
  replace,
  replaced,
  navigate,
};
