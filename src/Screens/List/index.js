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

// нащи данные для кнопок
const tea=[
    {name:'зеленый чай'},
    {name:'красный чай'},
    {name:'белый чай',},
    {name:'пуэр чай',}]
const dishesTea=[
    {name:'чайник глиняный',img:'P1',text:'В чайной традиции Китая принято распивать чай из мелкой посуды. Церемониальные чайники небольшие, средний объем от 100 до 400 мл (в зависимости от количества гостей).\n\nВнешне они выглядят как обычная чайная посуда, но выделяются небольшим размером. \n\nКитайская чайная церемония предполагает заваривание проливами, при которых лист несколько раз заливается кипятком на 3-5 секунд. Каждый настой, кроме первого промывочного, потребляется. В этом и заключается проливное заваривание.'},
    {name:'гайвань',img:'P2',text:'Гайвань — это специальная посуда для заваривания и питья чая. Считается, что она появилась в Китае в XIV веке. В южных провинциях Китая она и сегодня служит распространенной альтернативой заварочному чайнику. Слово «гайвань» состоит из двух иероглифов и дословно переводится как «чашка с крышкой». Помимо крышки гайвань обязательно включает блюдце. Поэтому другое ее название — Сань Цхай Вань, что означает «чаша трех основ». Считается, что крышка символизирует небо, блюдце — землю, а чашка — человека, который должен жить в гармонии с ними.\n\nЧашка обычно небольшая, объемом около 100 мл. Но встречаются и более крупные, до 200 мл и больше. Формой чашка напоминает перевернутый колокол или пиалу: маленькое дно, расширяющиеся стенки и еще более широкое горлышко.'},
    {name:'чайник стеклянный',img:'P3',text:'Особенностью стеклянного чайника является его "демонстративность" - можно наблюдать как заваривается чайный лист, каков цвет его настоя.\n\nКак правило, люди пользующиеся стеклянными чайниками не используют его для заваривания проливами. Такая посуда несет эстетическую составляющую. Во время настаивания чая можно увидеть весь процесс раскрытия листа, изменение цвета воды.\n\nИспользуются такие чайники титестерами (профессиональные дегустаторы чая) при оптовых закупках чая. Помимо вкуса, титестеры обращают внимание и на цвет настоя, на степень раскрытия листа. Стеклянная посуда в этом случае не имеет никаких аналогов.'},]


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


// flatList компонет для отсровки нащих данных с нужными значениями куда мы прокидываем функцию для перехода на нужный экран и нужный нам текст
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