import React, { FunctionComponent, useRef } from "react";
import { FlatList, View } from "react-native";
import { Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ZAImage from "../../components/ZAImage";
import { colors, extraContainerSize, galleryImageSize, height, smallIcon, squareIcon, width } from "../../config/config";
import { RootState } from "../../redux/store";
import Carousel from 'react-native-reanimated-carousel';
import ZASquareButton from "../../components/ZASquareButton";
import { Camera, CaretUp, Download, Grid, Mic, Settings, Share, Trash } from "../../constants/images";
import ZACarousel from "../../components/ZACarousel";
import { actionType, flatListDataType, photoType } from "../../dtos";
import { routes } from "../../constants/routes";
import Sheet from "../../components/sheet";
import { Modalize } from 'react-native-modalize';
import { useHandleImagePress } from "../../logic/hooks/_handleImagePress";
import { useAllActions } from "../../logic/hooks/_actions";
import { useHandleActions } from "../../logic/hooks/_handleActions";



const GalleryScreen: FunctionComponent = (_props: any) => {
    const { navigation } = _props;
    const dispatch: any = useDispatch()
    const sheetRef = useRef<Modalize>(null);

    const openSheet = () => sheetRef?.current?.open();

    const closeSheet = () => {
        sheetRef?.current?.close();
    };
    //states
    const { stagedPhotos, showHorizontal, defaultPhotoIndex } = useSelector(
        (state: RootState) => state.homeState,
    );

    //logic
    const { handleImagePress, handleExitHorizontal } = useHandleImagePress();
    const { handleSettings } = useAllActions();

    const justPhotos = () => stagedPhotos?.map((item: any) => item?.path);


    const _renderItem = (obj: flatListDataType) => {
        const item: photoType = obj?.item;
        const index: number = obj?.index;
        return <ZAImage onLongPress={openSheet} onPress={() => handleImagePress(index)} uri={item?.path} size={galleryImageSize} />
    }


    const actions = [
        {
            onPress: () => handleExitHorizontal(),
            icon: <Grid {...squareIcon} fill={colors.white} />,
        },
        {
            onPress: () => handleSettings(),
            icon: <Mic {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => navigation.navigate(routes.CAMERA_SCREEN),
            icon: <Camera {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => openSheet(),
            icon: <CaretUp {...squareIcon} fill={colors.white} />,
        },
        {
            onPress: () => handleSettings(),
            icon: <Settings {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => handleSettings(),
            icon: <Download {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => handleSettings(),
            icon: <Share {...smallIcon} fill={colors.white} />,
        },
        {
            onPress: () => handleSettings(),
            icon: <Trash {...smallIcon} fill={colors.danger} />,
        },
    ];


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
                {showHorizontal && <ZACarousel justCarousel justifyContent="space-around" extraStyles={{ flex: 1 }}>
                    {[...actions.slice(0, 4)]?.map((action: actionType, index: number) => <ZASquareButton key={index} label={action.label} onPress={action.onPress} icon={action.icon} />)}
                </ZACarousel>}
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
