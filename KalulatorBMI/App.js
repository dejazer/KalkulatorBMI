import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [userHeight, setUserHeight] = useState('')
    const [userWeight, setUserWeight] = useState('')
    const [submit, setSubmit] = useState(false)

    const onPressHandler = () => {
        if (userHeight.length != 4) {
            Alert.alert('Warning!','Ma być podane w metrach np. 1.80', [
                { text: 'OK' }
            ], { cancelable: true })
        } else {
            setSubmit(!submit)
        }
    }

    return (
        <ImageBackground style={styles.container}
            source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' }}
        >
            <View>
                <Text style={styles.header}>kalkulator bmi</Text>
            </View>


            <View style={styles.inputBody}>
                <TextInput
                    style={styles.input}
                    placeholder='Height (m)'
                    placeholderTextColor='#aaa'
                    value={userHeight}
                    onChangeText={(value) => setUserHeight(value)}
                />
                                <TextInput
                    style={styles.input}
                    placeholder='Weight'
                    placeholderTextColor='#aaa'
                    value={userWeight}
                    onChangeText={(value) => setUserWeight(value)}
                />
                <Button style={styles.button}
                    title={submit ? "Clear" : "Submit"}
                    onPress={onPressHandler}
                />
                {
                    submit ? <Text style={styles.bodyText}>TWOJE BMI {Number(userWeight / (userHeight * userHeight)).toFixed(2)}</Text> : null
                }
            </View>

            <View>
                <Text style={styles.footer}>SERHII SAVCHUK</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 0,
        margin: 0,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontStyle:' oblique',
        fontSize: 37,
        color: 'yellow',
        textTransform: 'uppercase',
        backgroundColor: 'rgba(0,0,0,.5)'
       

    },
    inputBody: {
        alignSelf: 'center',
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: 'white',
    },
    input: {
        width: 200,
        backgroundColor: 'rgba(0,0,0,.5)',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        color: '#fff',
    },
    button:{
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    footer: {
        fontSize:15,
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        
    }
});