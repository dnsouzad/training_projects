import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button 
                        title='Abrir' 
                        onPress={() => props.navigation.navigate}/>
                </View>
                <View style={{flex:1}}>
                    <TextoCentral corFundo='#FF9546' corTexto='#000'>
                        Tela D
                    </TextoCentral>
                </View>
            </View>
        )
}