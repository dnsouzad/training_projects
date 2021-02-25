import React, { Component } from "react";
import { 
    ImageBackground, 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity 
} from 'react-native'

import backgroundImage from '../../assets/images/dogs.jpg'
import commonStyles from '../commonStyles'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            
            <ImageBackground source={backgroundImage}
                style={styles.background}>
                <Text style={styles.title}>Petshop</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontFamily: commonStyles.fonts.fontMontserrat.medium,
        fontSize: 70,
        marginBottom: 10,
        color: commonStyles.colors.black,
        backgroundColor: commonStyles.colors.white,
        padding: 20
    }
})