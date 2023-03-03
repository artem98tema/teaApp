import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";


// Стилизуем нащи компоненты для красоты
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:80,
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
        backgroundColor: 'green',
        justifyContent:'center',
    }
});

const Main = () => {
    // получаем метод для перехода на экран
    const navigation = useNavigation();

    // функция для перехода на нужный нам экран
    const goToTea=()=>{
        navigation.navigate('List',{
            name: 'Чай',
        })
    }
    const goToWindow=()=>{
        navigation.navigate('List',{
            name: 'Посуда',
        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={goToWindow} style={styles.button}>
                    <Text style={styles.text}>посуда</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity onPress={goToTea} style={styles.button}>
                <Text style={styles.text}>Чай</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Main