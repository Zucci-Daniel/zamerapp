import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors, detectTouch, squareIcon } from "../../config/config";
import { VoiceIcon } from "../../constants/images";

type ZASquareButtonType = {
    onPress?: () => void;
    icon?: JSX.Element;
    label?: string
}

const ZASquareButton: FunctionComponent<ZASquareButtonType> = (_props: ZASquareButtonType) => {
    const { onPress, icon = <VoiceIcon {...squareIcon} fill={colors.white} />, label = '' } = _props;

    return (
        <TouchableOpacity hitSlop={detectTouch} onPress={onPress} style={{ justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            {label && <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{label}</Text>}
        </TouchableOpacity>
    )
};

export default ZASquareButton;
