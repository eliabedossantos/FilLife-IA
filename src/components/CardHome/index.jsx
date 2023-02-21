import { Row,View } from "native-base";
import React from "react";
import {  Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
 
export default function CardHome({title, description, image, onPress}) {
    // console.warn(image);
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground 
                    source={{
                        uri: image,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                >
                    <View style={styles.overlay} />
                    <View p={4} 
                        flexDir="column"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        w="100%"
                        h="100%"
                    >
                        <Text style={styles.title}>{title}</Text>
                        <Row
                            justifyContent="space-between"
                            alignItems="flex-end"
                            w="100%"
                        >
                            <Text style={styles.description}>{description}</Text>
                            <TouchableOpacity onPress={onPress}>
                                <View
                                    style={styles.button}
                                >
                                    <Text style={styles.texButton}>Selecionar</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </View>
                </ImageBackground>
            </View>

        </TouchableOpacity>
    );
}
