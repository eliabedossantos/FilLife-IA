import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#fff',
        width: '70%',
    },
    container: {
        width: "100%",
        backgroundColor: "#F5F6FA",
        height: 310,
        borderBottomRightRadius: 50,
        overflow: 'hidden',
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
    content: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 30,
    },
    image: {
        width: '100%',
        height: '100%',

    },
});

export default styles;