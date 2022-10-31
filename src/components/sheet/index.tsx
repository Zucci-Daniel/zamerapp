import React, { FunctionComponent, ReactNode, Ref } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

type SheetTypes = {
  enableSlideToClose: boolean;
  disableBackDrop: boolean;
  sheetRef: Ref<Modalize>;
  onBackPress?: () => void;
  onPressButton?: () => void;
  modalStyle?: ViewStyle;
  children: ReactNode;
  snapHeight?: number;
  showButton?: boolean;
  useButtonText?: boolean;
  buttonTitle?: string;
};

const Sheet: FunctionComponent<SheetTypes> = (_props: any) => {
  const {
    enableSlideToClose = true,
    disableBackDrop,
    sheetRef,
    onBackPress,
    modalStyle,
    useButtonText = false,
    snapHeight = 0,
    children,
    showButton = true,
    onPressButton,
    buttonTitle = 'close',
  } = _props;

  return (
    <Portal>
      <Modalize
        panGestureEnabled={enableSlideToClose}
        closeOnOverlayTap={disableBackDrop}
        keyboardAvoidingOffset={30}
        alwaysOpen={snapHeight}
        scrollViewProps={{ keyboardShouldPersistTaps: 'always' }}
        ref={sheetRef}
        onBackButtonPress={onBackPress}
        modalStyle={modalStyle}
        adjustToContentHeight={true}>
        <TouchableOpacity
          onPress={onPressButton}
          style={{ alignSelf: 'flex-end', padding: 20 }}>
          <Text></Text>
        </TouchableOpacity>
        {children}
      </Modalize>
    </Portal>
  );
};

export default Sheet;
