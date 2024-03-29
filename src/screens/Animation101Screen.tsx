import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, position, startMovingPosition, fadeIn, fadeOut } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    marginBottom: 20,
                    opacity,
                    transform: [{
                        translateY: position,
                    }],
                }} />

            <Button
                title="FadeIn"
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-300, 300);
                }
                }
            />

            <Button
                title="FadeOut"
                onPress={fadeOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});
