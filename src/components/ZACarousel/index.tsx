import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, ReactNode } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../config/config";
import { routes } from "../../constants/routes";
import { setDefaultIndex, setShowHorizontal } from "../../redux/home/homeSlice";
import ZAImage from "../ZAImage";


type ZACarouselTypes = {
    images?: string[] | object[],
    justCarousel?: boolean,
    children?: ReactNode,
    height?: number,
    marginVertical?: number,
    justifyContent?: 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end' | 'space-evenly',
    extraStyles?: ViewStyle
}

const ZACarousel: FunctionComponent<ZACarouselTypes> = (_props: ZACarouselTypes) => {
    const navigation = useNavigation()
    const { images = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200',], justCarousel = false, children, marginVertical = 10, height = 50, extraStyles, justifyContent = 'space-around' } = _props;
    const dispatch: any = useDispatch();

    const handleImagePress = (index: number) => {
        dispatch(setDefaultIndex(index))
        dispatch(setShowHorizontal(true))
        navigation.navigate(routes.GALLERY_SCREEN)
    }


    return (
        <View style={{ height, marginVertical, justifyContent: 'center', alignItems: 'center', width: '100%', }}>
            <ScrollView horizontal contentContainerStyle={[{ justifyContent, alignItems: 'center', flexDirection: 'row' }, extraStyles]}>
                {justCarousel ? children : images?.map((item: any, index) => <ZAImage onPress={() => handleImagePress(index)} uri={item?.path} key={index} />)}
            </ScrollView>
        </View>
    );
};

export default ZACarousel;
