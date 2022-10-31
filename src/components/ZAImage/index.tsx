import React, { FunctionComponent } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { colors, miniImageSize } from "../../config/config";


type ZAImageTypes = {
    uri: string,
    size?: number | string,
    onPress?: () => void,
    height?: number | string,
    readonly?: boolean
}

const ZAImage: FunctionComponent<ZAImageTypes> = (_props: ZAImageTypes) => {
    const { uri = 'https://picsum.photos/200/300', height, readonly = false, size = miniImageSize, onPress = () => null } = _props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={readonly ? 1 : .6} style={{ width: size, height: height ? height : size, backgroundColor: colors.dark, marginLeft: 1, alignSelf: 'center' }} >
            <Image style={{ width: '100%', height: '100%' }} source={{ uri }} />
        </TouchableOpacity>
    );
};

export default ZAImage;
