import React, { useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInimage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {
                isLoading && (
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        color="grey"
                        size={30}
                    />
                )
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
};
