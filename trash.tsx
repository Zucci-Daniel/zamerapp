/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import {
    LogBox,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { BiomsIcon } from './src/constants/images';
import Voice from '@react-native-voice/voice';
import { RootState } from './src/redux/store';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    const { name } = useSelector(
        (state: RootState) => state.homeState,
    );

    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [voiceStarted, setVoiceStarted] = useState(null);
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);


    LogBox.ignoreLogs([
        'redux-persist failed',
    ]);

    useEffect(() => {
        console.log('effect started')
        Voice.onSpeechStart = onSpeachStart;
        Voice.onSpeechEnd = onSpeachEnd;
        Voice.onSpeechError = onSpeachError;
        Voice.onSpeechResults = onSpeachResult;
        Voice.onSpeechPartialResults = onSpeechPartialResults;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, [voiceStarted])

    const onSpeachStart = (e: unknown) => {
        console.log(e, ' speach started!');
        setStarted('true')
    }

    const onSpeachEnd = (e: unknown) => {
        console.log(e, ' speach ended!');
        setEnd('true')
    }
    const onSpeachError = (e: unknown) => {
        console.log(e, ' speach error!');
        setError('true')
    }

    const onSpeachResult = (e: any) => {
        console.log(e, ' speach result!');
        setResults(e.value)
    }
    const onSpeechPartialResults = (e: any) => {
        console.log(e, ' speach partial result!');
        setPartialResults(e.value)
    }

    const startRecording = async (e: unknown) => {
        setVoiceStarted(true)
        try {
            const response = await Voice.isAvailable()
            console.log('voice is ava', response)
            await Voice.start('en-US');

            setPitch('')
            setError('')
            setStarted('')
            setResults([])
            setPartialResults([])
            setEnd('')
        } catch (error) {
            console.log(error, ' failed')
        }

    }

    console.log(voiceStarted)

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={{ flex: 1, backgroundColor: backgroundStyle.backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={startRecording}>
                    <BiomsIcon width={100} height={100} fill={'white'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default App;
