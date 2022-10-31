import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionType } from '../../dtos';
import { setDefaultIndex, setShowHorizontal } from '../../redux/home/homeSlice';
import {
  Grid,
  Mic,
  Camera,
  CaretUp,
  Settings,
  Download,
  Share,
  Trash,
} from '../../constants/images';
import { useHandleImagePress } from './_handleImagePress';
import { useAllActions } from './_actions';
import { useNavigation } from '@react-navigation/native';

export const useHandleActions = () => {
  let dispatch = useDispatch();
  const navigation = useNavigation()
  let { handleSettings } = useHandleActions();


  return null
};
