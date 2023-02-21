import React from "react";
import {  Text, Button } from "react-native";
import { FlatList, ScrollView, View } from "native-base";
import styles from "./styles";
import CardHome from "../../components/CardHome";
import { cards } from "../../util/mock/cards";
import { useDispatch } from "react-redux";
import { modificaCampo } from "../../redux/actions/utilActions";
import { styleGlobal } from "../../styles/styles";
 
export default function Home() {
    const dispatch = useDispatch();

    return (
        <ScrollView
            flex={1}
            showsVerticalScrollIndicator={false}
        >
            <View
                py={5}
                px={4}
                safeArea
                flex={1}
                w="100%"
                style={styles.container}
            >
                <View>
                    <Text style={styles.title}>Sugestões</Text>
                    <View style={styleGlobal.divider} />
                    <FlatList
                        data={cards}
                        scrollEnabled={false}
                        style={styles.flatList} 
                        renderItem={({item}) => (
                            <CardHome
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                onPress={() => {
                                    dispatch(modificaCampo(null, 'RECIPES_MODIFY_ITEM_SELECTED'))
                                    dispatch(modificaCampo(item, 'RECIPES_MODIFY_ITEM_SELECTED'))
                                    item.type === 'recipes' ? global.navigation.navigate('recipes') : global.alerta.alert('Em desenvolvimento', null, 'Em breve')
                                }}
                            />
                        )}
                        ItemSeparatorComponent={() => <View h={4} />}
                        keyExtractor={(item) => item.title}
                        showsVerticalScrollIndicator={false}
                        safeArea
                    />

                </View>
            </View>
        </ScrollView>
    );
}
