import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, Input} from 'native-base';
import styles from "./styles";
import HeadScreensImage from '../../components/HeadScreensImage';
import Loading from '../../components/Loading';
import colors from '../../styles/colors';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { modificaCampo } from '../../redux/actions/utilActions';
import { sendQuestionRecipe } from '../../services/GPT3';
import { styleGlobal } from '../../styles/styles';

export default function Recipes() {
    const dispatch = useDispatch();

    const itemSelected = useSelector(state => state.RecipesReducer.itemSelected);
    const especifications = useSelector(state => state.RecipesReducer.especifications);

    const [ingredients, setIngredients] = useState('');
    const [goal, setGoal] = useState('');
    const [calories, setCalories] = useState(0);
    const [meals, setMeals] = useState(0);
    const [restrictions, setRestrictions] = useState('');

    const obj = {
        ingredients: ingredients,
        goal: goal,
        calories: calories,
        meals: meals,
        restrictions: restrictions,
    }
    
    
    const handleGoal = (goalItem) => {
        if(goal === goalItem && goal !== '') {
            setGoal('');
        } else {
            setGoal(goalItem);
        }
    }

    const handleCancel = () => {
        setIngredients('');
        setGoal('');
        setCalories(0);
        setMeals(0);
        setRestrictions('');
        dispatch(modificaCampo({}, 'RECIPES_MODIFY_ESPECIFICATIONS'));
        
    }

    const handleSave = () => {
        console.log('Salvando...');
        dispatch(modificaCampo(obj, 'RECIPES_MODIFY_ESPECIFICATIONS'));
        global.navigation.navigate('ticketRecipe');
    }




    return (
        <>
            {
                itemSelected !== null ? (
                    <ScrollView
                        flex={1}
                        showsVerticalScrollIndicator={false}
                        bg={colors.background}
                    >
                        <View style={styles.container}>
                            <HeadScreensImage 
                                image={itemSelected.image}
                                title={itemSelected.title}
                                description={itemSelected.description}
                            />
                            <View style={styles.content}>
                                <Text style={styles.title}>Ingredientes</Text>
                                <View style={styleGlobal.divider} />
                                <Text style={styles.text}>
                                    Se quiser, você pode descrever abaixo os ingredientes que você tem em casa para as refeições de hoje.
                                </Text>
                                <Input
                                    style={styles.input}
                                    placeholder="Ex: batata inglesa, cenoura, brócolis, azeite, sal, pimenta, etc."
                                    value={ingredients}
                                    multiline={true}
                                    numberOfLines={2}
                                    placeholderTextColor={colors.textPrimary}
                                    borderColor={'transparent'}
                                    borderWidth={.5}
                                    padding={1}
                                    bg={colors.backgroundSecondary}
                                    borderRadius={5}
                                    _focus={{
                                        borderColor: colors.primary,
                                        backgroundColor: colors.backgroundSecondary,
                                        borderWidth: .5,
                                    }}
                                    onChangeText={(value) => setIngredients(value)}
                                    mb={5}
                                />
                                <Text style={styles.title}>
                                    Seus objetivos
                                </Text>
                                <View style={styleGlobal.divider} />
                                <Text style={styles.text}>
                                    Especifique os objetivos que você deseja alcançar com as refeições de hoje.
                                </Text>
                                <View style={styles.goals}>
                                    <TouchableOpacity
                                        onPress={() => handleGoal('Emagrecimento')}
                                    style={styles.goal}>
                                        <ImageBackground
                                            source={require('../../assets/images/emagrecimento.jpg')}
                                            style={styles.goalImage}
                                            resizeMode="cover"
                                        >
                                            <View style={styles.overlay} /> 
                                            <View style={styles.goalContent}>
                                                <Text style={styles.goalText}>Emagrecimento</Text>
                                                {
                                                    goal === 'Emagrecimento' && (
                                                        <Ionicons 
                                                        style={styles.goalIcon}
                                                        name="md-checkmark-circle" size={22} color={colors.primary} />
                                                    )
                                                }
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleGoal('Hipertrofia')}
                                        style={styles.goal}>
                                        <ImageBackground
                                            source={require('../../assets/images/hipertrofia.jpg')}
                                            style={styles.goalImage}
                                            resizeMode="cover"
                                        >
                                            <View style={styles.overlay} /> 
                                            <View style={styles.goalContent}>
                                                <Text style={styles.goalText}>Hipertrofia</Text>
                                                { goal === 'Hipertrofia' && (
                                                <Ionicons 
                                                style={styles.goalIcon}
                                                name="md-checkmark-circle" size={22} color={colors.primary} />
                                                )}
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={() => handleGoal('Ganho de massa')}
                                        style={styles.goal}>
                                        <ImageBackground
                                            source={require('../../assets/images/ganhoMassa.jpg')}
                                            style={styles.goalImage}
                                            resizeMode="cover"
                                            
                                        >
                                            <View style={styles.overlay} /> 
                                            <View style={styles.goalContent}>
                                                <Text style={styles.goalText}>Ganho de massa</Text>
                                                { goal === 'Ganho de massa' && (
                                                <Ionicons 
                                                style={styles.goalIcon}
                                                name="md-checkmark-circle" size={22} color={colors.primary} />
                                                )}
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                
                                <View mt={5}>
                                    <Text style={styles.text}>
                                        Quantidade de calorias que deseja atingir (opcional)
                                    </Text>
                                    <Input
                                        style={styles.input}
                                        label="Quantidade de calorias que deseja atingir"
                                        value={calories}
                                        placeholder="Ex: 2000"
                                        keyboardType="numeric"
                                        height={50}
                                        placeholderTextColor={colors.textPrimary}
                                        borderColor={'transparent'}
                                        borderWidth={.5}
                                        padding={1}
                                        bg={colors.backgroundSecondary}
                                        borderRadius={5}
                                        _focus={{
                                            borderColor: colors.primary,
                                            backgroundColor: colors.backgroundSecondary,
                                            borderWidth: .5,
                                        }}
                                        onChangeText={(value) => setCalories(value)}
                                    />
                                </View>
                                <View mt={5}>
                                    <Text style={styles.text}>
                                        Quantidade de refeições que deseja fazer hoje (opcional)
                                    </Text>
                                    <Input
                                        style={styles.input}
                                        label="Quantidade de refeições que deseja fazer hoje"
                                        placeholder="Ex: 3"
                                        value={meals}
                                        keyboardType="numeric"
                                        height={50}
                                        placeholderTextColor={colors.textPrimary}
                                        borderColor={'transparent'}
                                        borderWidth={.5}
                                        padding={1}
                                        bg={colors.backgroundSecondary}
                                        borderRadius={5}
                                        _focus={{
                                            borderColor: colors.primary,
                                            backgroundColor: colors.backgroundSecondary,
                                            borderWidth: .5,
                                        }}
                                        onChangeText={(value) => setMeals(value)}
                                    />
                                </View>
                                <View mt={6}>
                                    <Text style={styles.title}>
                                        Mais informações
                                    </Text>
                                    <View style={styleGlobal.divider} />
                                    <Text style={styles.text}>
                                        Você possui alguma restrição alimentar? Se sim, qual?
                                    </Text>
                                    <Input
                                        style={styles.input}
                                        placeholder="Ex: intolerância a lactose, alergia a frutos do mar, etc."
                                        multiline={true}
                                        numberOfLines={2}
                                        placeholderTextColor={colors.textPrimary}
                                        borderColor={'transparent'}
                                        borderWidth={.5}
                                        padding={1}
                                        bg={colors.backgroundSecondary}
                                        borderRadius={5}
                                        mb={5}
                                        _focus={{
                                            borderColor: colors.primary,
                                            backgroundColor: colors.backgroundSecondary,
                                            borderWidth: .5,
                                        }}
                                        value={restrictions}
                                        onChangeText={(value) => setRestrictions(value)}
                                    />
                                </View>
                            </View>
                            <View mt={5} style={styles.buttons}>
                                <TouchableOpacity
                                    onPress={handleCancel}
                                    style={[styles.button,{backgroundColor: 'transparent'}]}
                                >
                                    <Text style={[styles.buttonText,{color: colors.primary}]}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleSave}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Gerar Receitas</Text>
                                    {/* <Ionicons name="ticket" size={22} color={colors.white} /> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <Loading />
                )
            }
        
        </>
    );
}