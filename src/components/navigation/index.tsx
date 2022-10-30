import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { colors } from "../../config/config";
import CameraScreen from "../../screens/cameraScreen";
import { routes } from "../../constants/routes";
import GalleryScreen from "../../screens/galleryScreen";


const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation: FunctionComponent = () => {
    return (
        <>
            <NavigationContainer theme={{ colors: { background: colors.white } }}>
                <TopTab.Navigator
                    initialRouteName={routes.CAMERA_SCREEN}
                    tabBarPosition="top"
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarContentContainerStyle: { display: 'none' },
                        tabBarAccessibilityLabel: 'false',
                        swipeEnabled: true,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            paddingVertical: 0,
                        },
                        tabBarPressColor: 'transparent',
                    }}>
                    <TopTab.Screen
                        name={routes.CAMERA_SCREEN}
                        component={CameraScreen}
                    />
                    <TopTab.Screen
                        name={routes.GALLERY_SCREEN}
                        component={GalleryScreen}
                    />
                </TopTab.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;
