import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useRef, useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, Text, TouchableOpacity, View, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Title 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Title 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Title 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

interface Props extends StackScreenProps<any, any> { }

export const SlideScreen = ({ navigation }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    const isViewable = useRef(false);
    const {theme : {colors}} = useContext(ThemeContext);

    const rederItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
            }}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: colors.primary,
                }}
                >
                    {item.title}
                </Text>
                <Text style={{
                    fontSize: 16,
                    color: colors.text,
                }}
                >
                    {item.desc}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 20,
                backgroundColor: colors.background,
            }}
        >
            <Carousel
                //   ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }: any) => rederItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={'default'}
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (index === items.length - 1) {
                        isViewable.current = true;
                        fadeIn();
                    }
                }}
            />

            {/* Pagination */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        marginHorizontal: 8,
                        backgroundColor: '#5856D6',
                    }}
                />
                <Animated.View
                    style={{
                        opacity,
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856D6',
                            height: 50,
                            marginHorizontal: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 20,
                            paddingHorizontal: 20,
                        }}
                        onPress={() => {
                            if (isViewable.current) {
                                navigation.navigate('HomeScreen');
                            }
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                        >
                            Go!
                        </Text>
                        <Icon
                            name="chevron-forward-outline"
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};
