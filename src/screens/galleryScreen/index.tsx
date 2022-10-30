import React, { FunctionComponent } from "react";
import { FlatList, View } from "react-native";
import { Colors } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { useSelector } from "react-redux";
import ZAImage from "../../components/ZAImage";
import { galleryImageSize } from "../../config/config";
import { RootState } from "../../redux/store";

const GalleryScreen: FunctionComponent = () => {

    const { stagedPhotos } = useSelector(
        (state: RootState) => state.homeState,
    );



    return (
        <View style={{ flex: 1, backgroundColor: Colors.black }}>
            <FlatList
                data={stagedPhotos}
                keyExtractor={(item: any) => item?.path}
                renderItem={({ item, index }) => <ZAImage uri={item?.path} size={galleryImageSize} />}
                numColumns={2}
            />
        </View>
    );
};

export default GalleryScreen;
