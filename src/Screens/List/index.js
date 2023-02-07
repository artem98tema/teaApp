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
const tea=[
    {name:'зеленый чай',img:'GT1'},
    {name:'красный чай',img:'GT2'},
    {name:'белый чай', img:'GT3'},
    {name:'желтый чай', img:'GT4'},
    {name:'пуэр чай', img:'GT5'}]
const window=[{name:'окно 1',id:1}, {name:'окно 2',id:2}, {name:'еще окно',id:3}]

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const List = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const goToList=(item)=>{
        navigation.navigate('ListDetail',{
            name: item.name,
            img:item.img
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={route.params?.name==='Чай'?tea:window}
                renderItem={({item}) => <TouchableOpacity onPress={()=>goToList(item)}><Item title={item.name} /></TouchableOpacity>}
                keyExtractor={item => item.img}
            />
        </View>
    )
}
export default List