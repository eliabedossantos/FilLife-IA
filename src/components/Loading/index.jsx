import { React } from 'react';
import {  Text, View } from 'native-base';
import { ActivityIndicator, Modal } from 'react-native';
import colors from '../../styles/colors';

export default function Loading() {
    return (
       <Modal
            animationType="fade"
            transparent={false}
            presentationStyle="overFullScreen"
            visible={true}
            s
        >
            <View
                flex={1}
                justifyContent="center"
                alignItems="center"
                style={{
                    backgroundColor: colors.blackground,
                    width: '100%',
                    height: '100%',
                }}
            >
                <ActivityIndicator size="large" color={colors.primary} />
                <Text color={colors.textSecondary} mt={2} fontSize={14}>Carregando...</Text>
            </View>
        </Modal>

    );
}