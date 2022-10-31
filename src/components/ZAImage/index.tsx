import React, { FunctionComponent } from "react";
import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { colors, miniImageSize } from "../../config/config";


type ZAImageTypes = {
    uri: string,
    size?: number | string,
    onPress?: () => void,
    height?: number | string,
    readonly?: boolean,
    onLongPress?: () => void

} & Omit<ImageProps, 'children'> & Omit<TouchableOpacityProps, ' children'>;

const ZAImage: FunctionComponent<ZAImageTypes> = (_props: ZAImageTypes) => {
    const { uri = 'https://picsum.photos/200/300', height, readonly = false, size = miniImageSize, onPress = () => null, onLongPress = () => null } = _props;
    return (
        <TouchableOpacity onPress={onPress} delayLongPress={200} onLongPress={onLongPress} activeOpacity={readonly ? 1 : .6} style={{ width: size, height: height ? height : size, backgroundColor: colors.dark, marginLeft: 1, alignSelf: 'center' }} >
            <Image style={{ width: '100%', height: '100%' }} source={{ uri }} />
        </TouchableOpacity>
    );
};

export default ZAImage;
