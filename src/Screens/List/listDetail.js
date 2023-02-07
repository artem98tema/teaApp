import React, {useEffect, useState} from 'react';
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
const tea=[{name:'зеленый чай',img:'GT1'},{name:'красный чай',img:'GT2'},{name:'чай 3', img:'GT3'},{name:'чай 4', img:'GT4'},{name:'чай 5', img:'GT5'}]
const window=[{name:'окно 1',id:1}, {name:'окно 2',id:2}, {name:'еще окно',id:3}]

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const greenTea=[
    {name:'чай зеленый 1',img:'GT1'},
    {name:'чай зеленый 2',img:'GT2'},
    {name:'чай зеленый 3',img:'GT3'},
    {name:'чай зеленый 4',img:'GT4'},
    {name:'чай зеленый 5',img:'GT5'}];
const redTea=[
    {name:'чай красный 1',img:'RT1'},
    {name:'чай красный 2',img:'RT2'},
    {name:'чай красный 3',img:'RT3'},
    {name:'чай красный 4',img:'RT4'},
    {name:'чай красный 5',img:'RT5'}];
const puerTea=[
    {name:'чай пуэр 1',img:'PT1'},
    {name:'чай пуэр 2',img:'PT2'},
    {name:'чай пуэр 3',img:'PT3'},
    {name:'чай пуэр 4',img:'PT4'},]
const whiteTea=[
    {name:'чай белый 1',img:'WT1'},
    {name:'чай белый 2',img:'WT2'},
    {name:'чай белый 3',img:'WT3'},]
const ListDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [data,setData]=useState(greenTea)
    useEffect(()=>{
        let name = route.params.name;
        if(name==='зеленый чай'){
            setData(greenTea)
        }
        if(name==='красный чай'){
            setData(redTea)
        }
        if(name==='белый чай'){
            setData(whiteTea)
        }
        if(name==='пуэр чай'){
            setData(puerTea)
        }
    },[])
    const goToList=(item)=>{
        navigation.navigate('Detail',{
            name: item.name,
            img:item.img
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <TouchableOpacity onPress={()=>goToList(item)}><Item title={item.name} /></TouchableOpacity>}
                keyExtractor={item => item.img}
            />
        </View>
    )
}
export default ListDetail