import { React } from 'react';
import { View, Text} from 'native-base';
import { ImageBackground } from 'react-native';
import styles from './styles';

export default function HeadScreensImage({image, title, description}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: image}}
                style={styles.image}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}