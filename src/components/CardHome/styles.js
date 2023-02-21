import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    description: {
        fontSize: 14,
        color: colors.textPrimary,
        width: '50%',
    },
    container: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',

    },

    button: {
        backgroundColor: colors.primary,
        width: 110,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    texButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.textSecondary,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 10,
    },
});

export default styles;