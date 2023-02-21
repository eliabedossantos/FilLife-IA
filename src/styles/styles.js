import {StyleSheet} from 'react-native';

import colors from './colors';


const styleGlobal = StyleSheet.create({
    divider: {
        height: 2,
        backgroundColor: colors.primary,
        width: "80%",
        marginBottom: 20,
        borderRadius: 6,
    },
});

export {colors,  styleGlobal};
