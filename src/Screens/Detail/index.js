import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width: '100%'
    },
    buttonView:{
        height:30,
        width:80,
        borderRadius:10,
        backgroundColor: 'green',
        justifyContent:'center',
    },
    image:{
        height: 200,
        width:300,
        backgroundColor:'pink',
        marginBottom:15,
        marginTop:20
    }
});

const Detail = () => {
    const navigation = useNavigation();
    const goToTea=()=>{
        navigation.navigate('List',{
            name: 'Чай',
        })
    }
    const goToWindow=()=>{
        navigation.navigate('List',{
            name: 'Окна',
        })
    }
    return(

            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
            <View style={styles.image}>

            </View>
            <Text>asdasdasdasdadsasd</Text>
                </View>
            </ScrollView>

    )
}
export default Detail