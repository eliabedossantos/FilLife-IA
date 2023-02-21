import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.primary,
        marginVertical: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        color: colors.white,
        marginBottom: 8,
    },
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        // padding: 18,
        backgroundColor: colors.background,
        height: '100%',
    },
    button: {
        minWidth: 180,
        height: 50,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        // flexDirection: 'row',
    },
    buttonText: {
        color: colors.textSecondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;