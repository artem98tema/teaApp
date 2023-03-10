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

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

//Экрвн для видов

const greenTea=[
    {name:'Лао Цзюньшань Юй Цзянь',img:'GT1',text:'Выдержанный зеленый чай «Нефритовые Лезвия с острова Цзюньшань» из провинции Хунань.\n \nВ сухом виде: небольшие, тонкие, бежево-серые, пушистые почки. Аромат сдержанный, пряно-травянистый с ноткой душицы. Настой прозрачный, виноградно-желтый с легким розовым оттенком.\n\nБукет готового чая выдержанный, пряно-травянистый с нотками мяты и луговых цветов. Аромат тонкий, пряно-цветочный. Вкус мягкий, шелковистый, с легкой древесной терпчинкой, кислинкой зеленого яблока,  мятной прохладой и едва уловимым нюансом копченостей. Сочное, долгое, освежающее послевкусие. \n\nЗаваривать горячей водой (75-85°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 3-4 г на 100 мл. Для первого раза настоять 15-20 секунд, после чего пить проливом с постепенным увеличением экспозиции. Выдерживает 9-10 завариваний.\n\nВоздействие освежающее, легкое тонизирующее, самое позитивное.'},
    {name:'Сиху Лунцзин Чжатоу',img:'GT2',text:'Знаменитый «Колодец Дракона Западного Озера» сделан в районе Ханчжоу (провинция Чжэцзян).\n\nВ сухом виде: среднего размера аккуратные, плоские почки в форме «воробьиных язычков» ярких, фисташково-зеленых тонов. Аромат сухого чая интенсивный, травянисто-цветочный с ноткой жареных семечек подсолнуха. Настой прозрачный, светлого золотисто-зеленого оттенка.\n\nБукет готового чая объемный, яркий, травянисто-ореховый с цветочной ноткой. Аромат интенсивный, свежий, травянисто-ореховый. Вкус маслянистый и мягкий, сладкий и сочный, переходящий в долгое послевкусие.\n\nЗаваривать кипятком, остуженным до 70°С, в фарфоровой или селадоновой гайвани, стеклянной посуде. Пропорция заварки к воде: 4-5 гр. на 100 мл. Пить проливом с постепенным увеличением экспозиции. Выдерживает 5-6 заварок.\n\nКлассический «Лун Цзин» с сочным, объемным вкусом и освежающим, легким тонизирующим воздействием. '},
    {name:'Цзюнь Шань Сян Ча Ван',img:'GT3',text:'Выдержанный зеленый чай из провинции Хунань.\n\nВ сухом виде: небольшие, изогнутые, бурые, пушистые почки. Аромат сдержанный, пряно-травянистый. Настой прозрачный, светлого, виноградно-желтого оттенка. \n\nБукет готового чая выдержанный, пряно-травянистый с цветочными, фруктовыми и ореховыми нотками. Аромат тонкий, пряно-травянистый. Вкус тонкий, маслянистый, с легкой древесной терпкостью, нюансами специй и сочным, освежающим послевкусием. \n\nЗаваривать горячей водой (70-80°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 4 г на 100 мл. Для первого раза настоять 10-15 секунд, после чего пить проливом с постепенным увеличением экспозиции. Выдерживает 9-10 завариваний.\n\nВоздействие освежающее, легкое тонизирующее.'},
    {name:'Хэй Чу Хао',img:'GT4',text:'Зеленый чай провинции Гуанси.\n\nВ сухом виде: небольшие спиральки серо-зеленых почек и их фрагменты. Аромат интенсивный, пряно-травянистый. Настой прозрачный, виноградно-желтого оттенка.\n\nБукет готового чая яркий, многогранный, пряно-травянистый с нотками ягод и печеных каштанов. Аромат густой, пряно-ягодный. Вкус сочный, плотный, немного терпкий, сладковатый, с ягодной кислинкой и нюансами специй. Послевкусие сочное и долгое.\n\nЗаваривать горячей водой (80-90°С) в гайвани или фарфоровом чайнике. Пропорция заварки к воде: 3-4 г на 100 мл. Пить проливом с постепенным увеличением экспозиции. Выдерживает 6-7 завариваний. \n\nОтличный выбор для повседневных чаепитий – яркий, многогранный, тонизирующий'},
    {name:'Грузинский зеленый фермерский чай',img:'GT5',text:'В сухом виде: крупные, изогнутые, скрученные бурые листики с тонкими черенками. Аромат сухого чая сдержанный, пряно-травянистый. Настой прозрачный, виноградно-желтого оттенка.\n\nБукет готового чая свежий, травянистый с пряными и грибными нотками. Аромат легкий, травянистый. Вкус плотный, сочный, мягкий, с нежной терпчинкой и освежающим послевкусием.\n\nЗаваривать горячей водой (80-85°С) в гайвани или чайнике из пористой глины. Пропорция заварки к воде: 6-7 г на 100 мл. Для первого раза настоять 10 секунд, после чего, увеличивая время выдержки, можно заварить еще 5 раз. \n\nВоздействие освежающее, тонизирующее.'}];
const redTea=[
    {name:'Грузинская Красная габа',img:'RT1',text:'В сухом виде: крупные, изогнутые жгутики темно-коричневых листиков. Аромат сухого чая интенсивный, карамельно-ягодный. Настой прозрачный, янтарного оттенка.\n\nБукет готового чая яркий, теплый, многогранный, цветочно-ягодный с медовыми, карамельными, цитрусовыми и пряными нотками. Аромат высокий, цветочно-ягодный. Вкус плотный, гладкий и сладкий, маслянистый, с ягодной кислинкой и освежающим послевкусием. \n\nЗаваривать горячей водой (95°С) в гайвани или чайнике из пористой глины. Пропорция заварки к воде: 6-7 г на 100 мл. Для первого раза настоять в течение 15 секунд, затем пить проливом с постепенным увеличением экспозиции. Выдерживает 10 завариваний. \n\nПревосходный чай, который смело можно рекомендовать всем гурманам и искушенным любителям.'},
    {name:'Сяочжун Аньси',img:'RT2',text:'Фуцзяньский красный чай, обработан по технологии производства сяочжунов.\n\nВ сухом виде: среднего размера бордово-коричневые жгутики чайных листьев. Аромат сдержанный, фруктово-пряный. Настой прозрачный, оттенка золотистого миндаля.\n\nБукет готового чая яркий и теплый, фруктово-пряный, с древесными, цветочными и бисквитными нотками. Аромат нежный и теплый, многогранный, пряно-цветочный. Вкус сочный, чуть вяжущий, сладковатый, с ягодной кислинкой и нюансами специй в послевкусии. \n\nЗаваривать горячей водой (95°С) в чайнике из пористой глины или в фарфоровой гайвани. Пропорция заварки к воде: 5-6 г на 100 мл. Пить проливом с постепенным увеличением экспозиции. Держит вкус и аромат 7-8 завариваний.\n\nМногогранный, ароматный и достаточно тонкий красный чай, который подойдет как для повседневных чаепитий, так и для церемонии гунфуча.  '},
    {name:'Габа Ассам Хун Ча',img:'RT3',text:'Красный чай, обработанный по технологии анаэробной ферментации, из деревни Дои Май Салонг, район Чанграй (высота 1000 м). В качестве сырья использованы побеги ассамики.\n\nВ сухом виде: красно-коричневые, сферически скрученные чайные побеги с тонкими черенками. Аромат интенсивный, фруктово-пряный с бисквитной ноткой. Настой прозрачный, красно-каштанового оттенка.\n\nБукет готового чая яркий, фруктово-пряный с цветочными, древесными, бисквитными и ягодными нотками. Аромат интенсивный, теплый, фруктово-цветочный. Вкус плотный, сочный, терпкий, пряный, сладковатый, с ягодной кислинкой и освежающим послевкусием.\n\nЗаваривать горячей водой (95°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 5-6 г на 100 мл. Пить проливом с постепенным увеличением экспозиции. Выдерживает 9 завариваний.\n\nОтличный выбор для эмоциональной перезагрузки – насыщенный, бодрящий и очень ароматный.'},
    {name:'Гаруда габа',img:'RT4',text:'Чай, обработанный по технологии анаэробной ферментации, из деревни Дои Май Салонг, район Чанграй (высота 1000 м). \n\nВ сухом виде: небольшие, буро-коричневые, сферически скрученные чайные побеги. Аромат интенсивный, фруктово-пряный с бисквитной ноткой. Настой прозрачный, янтарного оттенка.\n\nБукет готового чая яркий, фруктово-пряный с медовыми, цветочными, бисквитными и ягодными нотками. Аромат интенсивный, теплый, фруктово-цветочный. Вкус плотный, сочный и сладкий, пряный, с ягодной кислинкой и освежающим послевкусием.\n\nЗаваривать горячей водой (90-95°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 6 г на 100 мл. Пить проливом с постепенным увеличением экспозиции. Выдерживает 9 завариваний. \n\nОтличный выбор для эмоциональной перезагрузки – насыщенный, бодрящий и очень ароматный. '},
    {name:'Гуйчжоу Ван',img:'RT5',text:'«Король Гуйчжоу» – красный чай провинции Гуйчжоу (округ Цзуньи), урожай 2022 г.\n\nВ сухом виде: крупные, темно-коричневые жгутики скрученных листиков. Аромат интенсивный, фруктово-пряный. Настой прозрачный, янтарного оттенка.\n\nБукет готового чая яркий, медово-древесный, с хлебными и ягодными нотками. Аромат теплый, пряно-ягодный. Вкус крепкий, пряный, сладковатый, маслянистый, немного терпкий, с легкой ягодной кислинкой и освежающим послевкусием.\n\nЗаваривать горячей водой (95°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 4-5 г на 100 мл. Первый раз настоять 5-7 секунд, после чего пить проливом с постепенным увеличением экспозиции. Выдерживает 7-8 завариваний.\n\nВоздействие согревающее, бодрящее; в слабой концентрации прекрасно подойдет и для вечернего расслабляющего чаепития.'}];
const puerTea=[
    {name:'Дундин Габа Шэн',img:'PT1',text:'В сухом виде: большие, буро-коричневые, скрученные листики с тонкими желтыми черенками. Аромат интенсивный, фруктово-пряный. Настой прозрачный, оттенка красного дерева.\n\nБукет готового чая свежий, многогранный, фруктово-цветочный с пряными, карамельными и ягодными нотками. Аромат высокий, легкий, фруктово-конфетный. Вкус тонкий, сладкий и мягкий, маслянистый, с фруктовой кислинкой, нюансами специй и долгим, освежающим послевкусием.\n\nЗаваривать горячей водой (75-85°С) в чайнике из пористой глины или в фарфоровой гайвани. Пропорция сухого чая к воде: 6 г на 100 мл. Для первого раза настоять 10 секунд, после чего пить проливом, постепенно увеличивая экспозицию. Держит вкус и аромат 12 завариваний.\n\nПревосходный чай с ярким, многогранным вкусом, упоительным ароматом и легким опьяняющим воздействием.'},
    {name:'Мэнхай Вэй И Цзи Шу Ча',img:'PT2',text:'Букет готового чая зрелый, древесно-ореховый с хлебными и пряными нотками. Аромат глубокий и теплый, древесно-ореховый. Вкус ровный, бархатистый, средней плотности, сладковатый, с легкой древесной терпчинкой, нюансами специй и сухих ягод.\n\nЗаваривать горячей водой (95°С) в чайнике из пористой глины или в гайвани. Пропорция заварки к воде: 7-8 г на 100 мл. Для первого раза настоять 10 секунд, после чего пить проливом с постепенным увеличением экспозиции. Сохраняет вкус и аромат 9 завариваний.\n\nОтличный выбор для повседневных чаепитий: мягкий,  ароматный, согревающий.'},
    {name:'Мэнхай Лаошу',img:'PT3',text:'В сухом виде: мелкие жгутики темно-коричневых листиков и рыжих почек. Аромат сдержанный, орехово-древесный. Настой темного, красно-каштанового оттенка.\n\nБукет готового чая зрелый, многогранный, ореховый, с бисквитными, фруктовыми и бальзамическими нотками. Аромат густой и теплый, ореховый. Вкус плотный, гладкий, очень мягкий, сладковатый, с кислинкой сухих ягод и бархатистым послевкусием. \n\nЗаваривать горячей водой (90-95°С) в чайнике из пористой глины или в гайвани. Пропорция заварки к воде: 5-6 г на 100 мл. Для первого раза настоять 10 секунд, после чего пить проливом с постепенным увеличением экспозиции. Сохраняет вкус и аромат 10 завариваний.\n\nПревосходный выдержанный чай для особого случая.'},
    {name:'Луо Лао Шэн Ча',img:'PT4',text:'В сухом виде: крупные, скрученные бурые листики и почки с длинными черенками. Аромат интенсивный, древесно-бальзамический с цветочной ноткой. Настой прозрачный, виноградно-желтого оттенка, в процессе заваривания темнеет.\n\nБукет готового чая зрелый, древесно-бальзамический, c нотками пряных трав, печеных каштанов и сухофруктов. Аромат многогранный, фруктово-бальзамический с копченой ноткой. Вкус плотный, сочный, сладковатый, немного терпкий, с фруктовой кислинкой, нюансами специй и освежающим послевкусием.\n\nЗаваривать горячей водой (95°С) в чайнике из пористой глины или в гайвани. Пропорция заварки к воде: 6 г на 100 мл. Для первого раза настоять 10 секунд, после чего пить проливом с постепенным увеличением экспозиции. Сохраняет вкус и аромат 10 завариваний.\n\nОтличный, выдержанный шэн – многогранный, яркий, ароматный.'},]
const whiteTea=[
    {name:'Чжэньхэ Мэйхуа Бай Му Дань Ван',img:'WT1',text:'«Королевский Белый Пион» из Чжэнхэ (провинция Фуцзянь)  урожая 2021 г.\n\nВ сухом виде: крупные почки и небольшие листики зеленых тонов. Аромат интенсивный, пряно-травянистый. Настой прозрачный, очень светлого, изумрудно-зеленого оттенка.\n\nБукет готового чая воздушный и легкий, пряно-травянистый с нотками первых, весенних цветов, мяты, березового сока и лайма. Аромат свежий, высокий, травянисто-цветочный. Вкус тонкий, сочный, объемный, с легкой кислинкой и холодком мяты, переходящий в долгое, освежающее послевкусие.\n\nЗаваривать горячей водой (80°С) в фарфоровой гайвани, чайнике из пористой глины или стеклянной посуде. Пропорция заварки к воде: 4-5 г на 100 мл. Для первого раза настоять 6-8 секунд, после чего пить проливом с постепенным увеличением экспозиции. Держит вкус и аромат до 10 завариваний.\n\nПрекрасный выбор для церемониального чаепития, возвышенных бесед или эмоциональной перезагрузки. Наполняет пространство тонким, весенним ароматом, рождает ощущение чистоты и свежести.'},
    {name:'Цзинмай Бай Ча',img:'WT2',text:'Аромат интенсивный, цветочно-ягодный. Настой прозрачный, виноградно-желтого оттенка.\n\nБукет готового чая яркий и свежий, пряно-цветочный с фруктовыми, ягодными и древесными нотками. Аромат свежий и легкий, фруктово-цветочный. Вкус плотный, шелковистый, немного пряный, с кисло-сладкими нюансами сухофруктов и свежих ягод. Приятное, освежающее послевкусие.\n\nЗаваривать горячей водой (80°С) в чайнике из пористой глины или в гайвани. Пропорция заварки к воде: 5 г на 100 мл. Первый раз настоять 5-7 секунд, далее пить проливом с постепенным увеличением экспозиции. Сохраняет вкус и аромат 9-10 завариваний.\n\nВоздействие освежающее, умеренно тонизирующее, самое позитивное.'},
    {name:'Чжэньхэ Да Бай Ча',img:'WT3',text:'Белый чай из уезда Чжэнхэ провинции Фуцзянь, в качестве сырья использованы весенние побеги сорта Да Бай Ча.\n\nВ сухом виде: буро-зеленые листики с тонкими черенками и серебристые почки. Аромат сдержанный, с нотками луговых трав. Настой прозрачный, светлого оттенка белого винограда.\n\nБукет готового чая свежий, многогранный, травянисто-цветочный, с нотками мяты, льняного семени, малинового листа и ягод крыжовника. Аромат нежный, цветочно-ягодный. Вкус плотный, сочный и сладкий, чуть пряный, с ягодной кислинкой, холодком мяты и долгим, освежающим послевкусием. \n\nЗаваривать горячей водой (85-90°С) в чайнике из пористой глины или в гайвани. Пропорция заварки к воде: 5 г на 100 мл. Для первого раза настоять 10-15 секунд, после чего пить проливом с постепенным увеличением экспозиции. Сохраняет вкус и аромат 10 завариваний.\n\nОтличный белый чай с многогранным вкусом, великолепным ароматом освежающим воздействием.'},]
const ListDetail = () => {
    const navigation = useNavigation();
    // получаем название нащего экрана для получени пропсов эттого экрана
    const route = useRoute();
    // создаем дефолтные данные для отрисовки наших кнопок
    const [data,setData]=useState(greenTea)

    // присваиваем нужные данные в зависимости от нашей категории
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
            img:item.img,
            text:item.text
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