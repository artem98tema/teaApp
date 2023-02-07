import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import { useRoute} from "@react-navigation/native";
import {images} from '../../img'
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
    imageWrapper:{
        height: 200,
        width:300,
        backgroundColor:'pink',
        marginBottom:15,
        marginTop:20
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

const Detail = () => {
    const route = useRoute();
   const GetImage = (name) => {
        const found = images.find(e => e.name === name);
        return found ? found.image : null;
    };
    const backgroundImage = GetImage(
        `${route.params.img}.jpg`,
    );

    return(

            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={backgroundImage}
                />
            </View>
            <Text>asdasdasdasdadsasd</Text>
                </View>
            </ScrollView>

    )
}
export default Detail