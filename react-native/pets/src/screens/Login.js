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
                <View style={styles.formContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        placeholder='Insira seu e-mail...'
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })} />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        placeholder='Insiria sua senha...'
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        fontSize: 50,
        marginBottom: 10,
        color: commonStyles.colors.black,
        backgroundColor: commonStyles.colors.white,
        padding: 20
    },
    formContainer: {

    },
    label: {

    },
    input: {
        marginTop: 10,
        backgroundColor: commonStyles.colors.white,
        padding: 10
    },
    button: {

    },
    buttonText: {

    }
})