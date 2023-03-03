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
        marginBottom:15,
        marginTop:20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textWrapper:{
        width: '100%',
        paddingHorizontal:30,
    },
    text:{
        fontSize:18
    }
});

const Detail = () => {
    const route = useRoute();
    // функция для нахождения нужной объекта их всех наших картинок по name
   const GetImage = (name) => {
        const found = images.find(e => e.name === name);
        return found ? found.image : null;
    };
   //получам нужную картинку
    const backgroundImage = GetImage(
        `${route.params.img}.jpg`,
    );
// присаиваем нужную картинку в строке 67, и используем компонент scrollVew для того чтобы есди будет много текста, то можно было проскроолить его ниже
    return(

            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={backgroundImage}
                />
            </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{route.params?.text? route.params?.text:'простое описание'}</Text>
                    </View>

                </View>
            </ScrollView>

    )
}
export default Detail