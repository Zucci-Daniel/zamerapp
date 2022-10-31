import React, { FunctionComponent } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { bigIcon, smallIcon } from "../../config/config";
import { BiomsIcon, CameraIcon } from "../../constants/images";
import { ZAButtonStyles } from "./styles";

type ZAButtonTypes = {
    onPress?: () => void;
    size?: number,
    borderWidth?: number,
    borderColor?: string,
    bg?: string,
    position?: 'left' | 'right' | 'center' | 'top',//should have more options
    icon?: JSX.Element
} & Omit<TouchableOpacityProps, 'children'>;

const ZAButton: FunctionComponent<ZAButtonTypes> = ({ onPress, size = 90, bg = 'transparent', position = 'right', icon, borderColor = 'transparent',
    borderWidth = 0 }) => {

    const renderPosition = (position: string) => {
        switch (position) {
            case 'left':
                return {
                    alignSelf: 'flex-start'
                }
            case 'center':
                return {
                    alignSelf: 'center'
                }
            case 'right':
                return {
                    alignSelf: 'flex-end'
                }

            default:
                return {
                    alignSelf: 'center'
                };
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[ZAButtonStyles.button, {
                backgroundColor: bg, height: size, width: size, borderRadius: size, borderColor: borderColor,
                borderWidth: borderWidth,
            }, renderPosition(position)]}>
            {icon ? icon : <CameraIcon {...bigIcon} fill='white' />}
        </TouchableOpacity>
    );
};

export default ZAButton;
