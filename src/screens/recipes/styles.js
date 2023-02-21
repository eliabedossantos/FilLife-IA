import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        color: colors.textPrimary,
        marginBottom: 12,
    },
    container: {
        width: "100%",
        flex: 1,
    },
    content: {
        padding: 18,
    },
    input: {
        margin: 12,
        color: colors.textPrimary,
    },
    goals: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    },
    goal: {
        width: 118,
        height: 118,
        borderRadius: 10,
        overflow: 'hidden',
    },
    goalImage: {
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
    goalContent: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    goalText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 16,
    },
    goalIcon: {
        position: 'absolute',
        top: 8,
        right: 6,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
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