import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";
import { colors, miniImageSize } from "../../config/config";


type ZAImageTypes = {
    uri: string
}

const ZAImage: FunctionComponent<ZAImageTypes> = (_props: ZAImageTypes) => {
    const { uri = 'https://picsum.photos/200/300' } = _props;
    return (
        <View style={{ marginVertical: 10, width: miniImageSize, height: miniImageSize, backgroundColor: colors.white, marginLeft: 1 }} >
            <Image style={{ width: '100%', height: '100%' }} source={{ uri }} />
        </View>
    );
};

export default ZAImage;
