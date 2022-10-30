import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";
import { colors, miniImageSize } from "../../config/config";


type ZAImageTypes = {
    uri: string,
    size: number | string,
}

const ZAImage: FunctionComponent<ZAImageTypes> = (_props: ZAImageTypes) => {
    const { uri = 'https://picsum.photos/200/300', size = miniImageSize } = _props;
    return (
        <View style={{ width: size, height: size, backgroundColor: colors.dark, marginLeft: 1, alignSelf: 'center' }} >
            <Image style={{ width: '100%', height: '100%' }} source={{ uri }} />
        </View>
    );
};

export default ZAImage;
