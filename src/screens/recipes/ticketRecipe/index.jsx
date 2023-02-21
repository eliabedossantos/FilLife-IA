import { React, useState, useEffect } from 'react';
import { View, Text, ScrollView, Divider, Row } from 'native-base';
import Loading from '../../../components/Loading';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../styles/colors';
import { Share, TouchableOpacity } from 'react-native';

export default function TicketRecipe() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState('');
    const cardItemRedux = useSelector((state) => state.RecipesReducer.itemSelected);
    const especifications = useSelector((state) => state.RecipesReducer.especifications);

    const fetchRecipes =  () => {
        setLoading(true);
        const url = 'https://api.openai.com/v1/completions'
    
        const prompt = `Insira informações importantes sobre ${especifications.goal != '' ? especifications.goal : 2000} crie ${cardItemRedux.input} para 1 dia com ${especifications.meals != 0 ? especifications.meals.toString()+' refeições': '5 refeições'} ${especifications.goal != '' ? 'com foco em '+especifications.goal+', ' : ''} ${especifications.calories != 0 ? 'para uma dieta de no máximo '+especifications.calories+' calorias': ''} ${especifications.ingredients != '' ? 'utilizando '+especifications.ingredients : ''} ${especifications.restrictions != '' ? 'para alguem com '+especifications.restrictions : ''} insira o total de calorias e informações nutricionais dos alimentos consumidos no final do dia.`

        console.log('prompt', prompt)
        fetch(url, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + global.config.apiKey,
            },
            body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 3000, 
            temperature: 0.5, 
            }),
        })
        .then((response) => response.json())
        .then((json) => {    
            console.log("JSON:", json.choices[0].text);
            setRecipes(json.choices[0].text);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error:", error)
            setLoading(false);
        })

    }


    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        setRecipes('');
        fetchRecipes();
    }

    const handleShare = async () => {

        try {
        const result = await Share.share({
            message: recipes,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            console.warn("compartilhado com o tipo de atividade de: " + result.activityType);
            } else {
            console.warn("compartilhado");
            }
        } else if (result.action === Share.dismissedAction) {
            console.warn("descartado");
        }
        } catch (error) {
            console.log(error.message);
        }
    };
    


    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                <View
                    flex={1}
                    mt={-4}
                    style={{
                        backgroundColor: colors.blackground,
                    }}

                >
                    <ScrollView
                        pt={4}
                        style={{
                            backgroundColor: colors.blackground,
                        }}
                        height="100%"
                    >
                        <View
                            style={styles.container}
                        >
                            <View style={styles.content}>
                                <View p={4}>
                                    <Text style={styles.title}>Refeições do dia</Text>
                                    <Divider my={3} bg={colors.primary}/>
                                    <Text style={styles.text}>{recipes}</Text>
                                </View>
                                <View
                                    mt={4}
                                    mb={4}
                                    style={{
                                        backgroundColor: colors.blackground,
                                    }}
                                >
                                    <Row
                                        mt={4}
                                        justifyContent="space-between"
                                        alignItems="center"
                                        backgroundColor={colors.blackground}
                                    >
                                        <TouchableOpacity
                                            onPress={handleRefresh}
                                            style={[styles.button,{borderTopLeftRadius: 0, borderTopRightRadius: 30}]}
                                        >
                                            <Text style={[styles.buttonText]}>Recarregar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={handleShare}
                                            style={styles.button}
                                        >
                                            <Text style={styles.buttonText}>Compartilhar</Text>
                                        </TouchableOpacity>
                                    </Row>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                )
            }
        </>
    );
}