import React, { FunctionComponent } from "react";
import { ScrollView, View } from "react-native";
import { colors } from "../../config/config";
import ZAImage from "../ZAImage";


type ZACarouselTypes = {
    images: string[] | object[]
}

const ZACarousel: FunctionComponent<ZACarouselTypes> = (_props: ZACarouselTypes) => {
    const { images = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200',] } = _props;
    return (
        <View style={{ height: 50, marginVertical: 10, justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row' }}>
            <ScrollView horizontal >
                {images?.map((item: any, index) => <ZAImage uri={`https://picsum.photos/${index + 1}00`} key={index} />)}
            </ScrollView>
        </View>
    );
};

export default ZACarousel;
