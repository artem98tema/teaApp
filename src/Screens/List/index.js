import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:80

    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width: '100%'
    },
    view:{
        height:30,
        width:80,
        borderRadius:10,
        backgroundColor: 'green',
        justifyContent:'center',
    },
    item: {
        backgroundColor: 'green',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
const data=['зеленый чай', 'красный чай','еще чай']
const data2=['окно 1', 'окно 2','еще окно']

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const List = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const goToList=(name)=>{
        navigation.navigate('Detail',{
            name: name,
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={route.params?.name==='Чай'?data:data2}
                renderItem={({item}) => <TouchableOpacity onPress={()=>goToList(item)}><Item title={item} /></TouchableOpacity>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default List