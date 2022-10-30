import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import { useDispatch, useSelector } from "react-redux";
import { colors, smallIcon } from "../../config/config";
import { FlashOff, FlashOn, Mic, VoiceIcon } from "../../constants/images";
import { setStagedPhotos } from "../../redux/home/homeSlice";
import { RootState } from "../../redux/store";
import ZAButton from "../ZAButton";
import ZACarousel from "../ZACarousel";

const ZACameraScreen: FunctionComponent = () => {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
    const camera = useRef<Camera | any>(null);
    const dispatch: any = useDispatch()
    const { stagedPhotos } = useSelector(
        (state: RootState) => state.homeState,
    );
    const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();
    const [microphonePermission, setMicrophonePermission] = useState<CameraPermissionStatus>();
    const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
    const [isUsingVoice, setIsUsingVoice] = useState<boolean>(false);



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
            flash: isFlashOn ? 'on' : 'off'
        })
        dispatch(setStagedPhotos(photo))
    }

    const toggleFlash = () => setIsFlashOn(!isFlashOn)// toggle a state
    const useVoice = () => setIsUsingVoice(!isUsingVoice)// useVoice


    if (cameraPermission == null || microphonePermission == null || device == undefined) {
        // still loading
        return null;
    }





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
                <ZAButton
                    size={60}
                    position="left"
                    onPress={toggleFlash}
                    bg={isFlashOn ? colors.white : colors.gray}
                    icon={isFlashOn ? <FlashOn fill={'black'}  {...smallIcon} /> : < FlashOff fill={'black'} {...smallIcon} />}
                />
                <ZAButton
                    position="center"
                    onPress={takeAPhoto}
                    borderColor={colors.white}
                    borderWidth={5}
                />
                <ZAButton
                    size={60}
                    position="right"
                    onPress={useVoice}
                    bg={isUsingVoice ? colors.white : colors.gray}
                    icon={isUsingVoice ? <VoiceIcon  {...smallIcon} /> : <Mic  {...smallIcon} />}
                />
            </View>
            <ZACarousel
                images={stagedPhotos}
            />
        </>
    );
};

export default ZACameraScreen;
