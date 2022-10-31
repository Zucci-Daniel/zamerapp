import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setDefaultIndex, setShowHorizontal} from '../../redux/home/homeSlice';

export const useAllActions = () => {
  let dispatch: any = useDispatch();

  const handleSettings = () => console.log('setting');

  return {handleSettings};
};
