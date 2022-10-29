import React, { FunctionComponent } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { BiomsIcon } from "../../constants/images";
import { ZAButtonStyles } from "./styles";

type ZAButtonTypes = {
    onPress: () => void;
    size: number,
    bg: string,
    position: 'left' | 'right' | 'center' | 'top',//should have more options
} & Omit<TouchableOpacityProps, 'children'>;

const ZAButton: FunctionComponent<ZAButtonTypes> = ({ onPress, size = 100, bg = 'rgba(115,115,115,0.6)', position = 'right' }) => {

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
            style={[ZAButtonStyles.button, { backgroundColor: bg, height: size, width: size, borderRadius: size }, renderPosition(position)]}>
            <BiomsIcon height={100} width={100} fill='white' />
        </TouchableOpacity>
    );
};

export default ZAButton;
