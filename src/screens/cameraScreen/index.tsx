import React, { FunctionComponent } from "react";
import { View } from "react-native";
import ZACameraScreen from "../../components/ZACameraScreen";

const CameraScreen: FunctionComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <ZACameraScreen />
        </View>
    );
};

export default CameraScreen;
