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
    {name:'зеленый чай'},
    {name:'красный чай'},
    {name:'белый чай',},
    {name:'пуэр чай',}]
const dishesTea=[
    {name:'чайник глиняный',img:'P1',text:'й. '},
    {name:'гайвань',img:'P2',text:'-'},
    {name:'чайник стеклянный',img:'P3',text:'as'},]
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const List = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const goToList=(item)=>{
        if(item.text){
            navigation.navigate('Detail',{
                name: item.name,
                img:item.img,
                text:item.text
            })
            return
        }
        navigation.navigate('ListDetail',{
            name: item.name,
            img:item.img
        })
    }



    return(
        <View style={styles.container}>
            <FlatList
                data={route.params?.name==='Чай'?tea:dishesTea}
                renderItem={({item}) => <TouchableOpacity onPress={()=>goToList(item)}><Item title={item.name} /></TouchableOpacity>}
                keyExtractor={item => item.img}
            />
        </View>
    )
}
export default List