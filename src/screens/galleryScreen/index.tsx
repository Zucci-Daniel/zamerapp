import React, { FunctionComponent, useRef } from "react";
import { FlatList, View } from "react-native";
import { Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ZAImage from "../../components/ZAImage";
import { bigIcon, colors, extraContainerSize, galleryImageSize, height, miniImageSize, smallIcon, squareIcon, width } from "../../config/config";
import { RootState } from "../../redux/store";
import Carousel from 'react-native-reanimated-carousel';
import { setDefaultIndex, setShowHorizontal } from "../../redux/home/homeSlice";
import ZASquareButton from "../../components/ZASquareButton";
import { BiomsIcon, Camera, CaretUp, Download, Grid, Mic, Settings, Share, Trash, VoiceIcon } from "../../constants/images";
import ZACarousel from "../../components/ZACarousel";
import { flatListDataType, photoType } from "../../dtos";
import { routes } from "../../constants/routes";
import Sheet from "../../components/sheet";
import { Modalize } from 'react-native-modalize';

type actionType = {
    onPress: () => void,
    icon: JSX.Element,
    label?: string,

}

const GalleryScreen: FunctionComponent = (_props: any) => {
    const { navigation } = _props;
    const dispatch: any = useDispatch()
    const sheetRef = useRef<Modalize>(null);




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
            icon: <Grid  {...squareIcon} fill={colors.white} />,
        },
        {
            onPress: () => null,
            icon: <Mic  {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => navigation.navigate(routes.CAMERA_SCREEN),
            icon: <Camera  {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => openSheet(),
            icon: <CaretUp  {...squareIcon} fill={colors.white} />,
        },
        {
            onPress: () => null,
            icon: <Settings  {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => null,
            icon: <Download  {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => null,
            icon: <Share  {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => openSheet(),
            icon: <Trash  {...smallIcon} fill={colors.danger} />,
        },
    ]
    const openSheet = () => sheetRef?.current?.open();

    const closeSheet = () => {
        sheetRef?.current?.close();
    };

    return (
        <>
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
                    {[...actions.slice(0, 4)]?.map((action: actionType, index: number) => <ZASquareButton key={index} label={action.label} onPress={action.onPress} icon={action.icon} />)}
                </ZACarousel>
            </View>
            <Sheet
                sheetRef={sheetRef}
                disableBackDrop={true}
                enableSlideToClose={true}
                onBackPress={closeSheet}
                modalStyle={{ backgroundColor: colors.sheet }}
                onPressButton={closeSheet}>
                <View style={{ height: undefined, paddingBottom: extraContainerSize / 3, width: '90%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {[...actions.slice(4)]?.map((action: actionType, index: number) => <ZASquareButton key={index} label={action.label} onPress={action.onPress} icon={action.icon} />)}
                </View>
            </Sheet>
        </>
    );
};

export default GalleryScreen;
