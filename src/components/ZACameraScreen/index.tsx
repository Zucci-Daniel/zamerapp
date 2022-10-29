import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import ZAButton from "../ZAButton";

const ZACameraScreen: FunctionComponent = () => {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
    const camera = useRef<Camera | any>(null)

    const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();
    const [microphonePermission, setMicrophonePermission] = useState<CameraPermissionStatus>();
    const [toggleFlashLight, setToggleFlashLight] = useState<boolean>(false);



    const seekPermission = async () => {
        try {
            const hasSetPerm = await Camera.getCameraPermissionStatus();
            const hasMicPerm = await Camera.getMicrophonePermissionStatus();

            if (hasMicPerm == 'denied' && hasSetPerm == 'denied') {
                const newCameraPermission = await Camera.requestCameraPermission()
                const newMicrophonePermission = await Camera.requestMicrophonePermission()
                setMicrophonePermission(newMicrophonePermission)
                setCameraPermission(newCameraPermission)
            } else {
                setMicrophonePermission(hasMicPerm)
                setCameraPermission(hasSetPerm)
                // const devices = await Camera.getAvailableCameraDevices()
                // console.log(devices, ' all')
            }

        } catch (error: any) {
            console.log('error', error?.message)
        }
    }

    useEffect(() => {
        seekPermission()
    }, []);

    const takeAPhoto = async () => {
        const photo = await camera.current.takePhoto({
            flash: toggleFlashLight ? 'on' : 'off'
        })
        console.log(photo, ' taken')
    }

    const toggleFlash = () => setToggleFlashLight(!toggleFlashLight)// toggle a state
    const useVoice = () => null// useVoice



    if (cameraPermission == null || microphonePermission == null || device == undefined) {
        // still loading
        return null;
    }


    console.log(toggleFlashLight)

    return (
        <>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                photo
                isActive={true}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, width: '80%', alignSelf: 'center' }}>
                <ZAButton size={60} position="left" onPress={toggleFlash} />
                <ZAButton position="center" onPress={takeAPhoto} />
                <ZAButton size={60} position="right" onPress={useVoice} />
            </View>
        </>
    );
};

export default ZACameraScreen;
