import React, { FunctionComponent } from "react";
import { FlatList, View } from "react-native";
import { Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ZAImage from "../../components/ZAImage";
import { bigIcon, colors, extraContainerSize, galleryImageSize, height, squareIcon, width } from "../../config/config";
import { RootState } from "../../redux/store";
import Carousel from 'react-native-reanimated-carousel';
import { setDefaultIndex, setShowHorizontal } from "../../redux/home/homeSlice";
import ZASquareButton from "../../components/ZASquareButton";
import { Camera, VoiceIcon } from "../../constants/images";
import ZACarousel from "../../components/ZACarousel";
import { flatListDataType, photoType } from "../../dtos";
import { routes } from "../../constants/routes";


type actionType = {
    onPress: () => void,
    icon: JSX.Element,
    label?: string,
}

const GalleryScreen: FunctionComponent = (_props: any) => {
    const { navigation } = _props;
    const dispatch: any = useDispatch()




    const { stagedPhotos, showHorizontal, defaultPhotoIndex } = useSelector(
        (state: RootState) => state.homeState,
    );

    const justPhotos = () => stagedPhotos?.map((item: any) => item?.path);

    const handleImagePress = (index: number) => {
        dispatch(setDefaultIndex(index))
        dispatch(setShowHorizontal(true))
    }

    const handleExitHorizontal = () => {
        dispatch(setShowHorizontal(false))
    }


    const _renderItem = (obj: flatListDataType) => {
        const item: photoType = obj?.item;
        const index: number = obj?.index;
        return <ZAImage onPress={() => handleImagePress(index)} uri={item?.path} size={galleryImageSize} />
    }

    const actions: actionType[] = [
        {
            onPress: () => handleExitHorizontal(),
            icon: <VoiceIcon  {...squareIcon} fill={colors.white} />,
            label: 'list',
        },
        {
            onPress: () => navigation.navigate(routes.CAMERA_SCREEN),
            icon: <Camera  {...bigIcon} fill={colors.white} />,
        },
        {
            onPress: () => console.log('first'),
            icon: <VoiceIcon  {...squareIcon} fill={colors.white} />,
            label: 'more',
        },
    ]


    return (
        <View style={{ flex: 1, backgroundColor: Colors.black }}>
            {!showHorizontal && <FlatList
                data={stagedPhotos}
                keyExtractor={(item: any) => item?.path}
                renderItem={(obj: flatListDataType) => _renderItem(obj)}
                numColumns={2}
            />}
            {showHorizontal && <View style={{ justifyContent: 'center', alignItems: 'center' }}><Carousel
                width={width}
                loop={false}
                pagingEnabled
                defaultIndex={defaultPhotoIndex}
                height={height - extraContainerSize}
                data={justPhotos()}
                scrollAnimationDuration={300}
                // onSnapToItem={(index) => handleSwipe(index)}
                renderItem={({ item }) => (
                    <ZAImage height={"100%"} readonly uri={item} size={width} />
                )}
            />
            </View>}
            <ZACarousel justCarousel justifyContent="space-around" extraStyles={{ flex: 1 }}>
                {actions?.map((action: actionType, index: number) => <ZASquareButton key={index} label={action.label} onPress={action.onPress} icon={action.icon} />)}
            </ZACarousel>
        </View>
    );
};

export default GalleryScreen;
