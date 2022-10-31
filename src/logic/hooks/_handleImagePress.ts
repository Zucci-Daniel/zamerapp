import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setDefaultIndex, setShowHorizontal} from '../../redux/home/homeSlice';

export const useHandleImagePress = () => {
  let dispatch: any = useDispatch();

  const handleImagePress = (index: number) => {
    dispatch(setDefaultIndex(index));
    dispatch(setShowHorizontal(true));
  };

  const handleExitHorizontal = () => {
    dispatch(setShowHorizontal(false));
  };

  return {handleImagePress, handleExitHorizontal};
};
