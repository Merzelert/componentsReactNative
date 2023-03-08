import React from 'react';
import { Button, Modal, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="More info"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={
                        {
                            backgroundColor: 'white',
                            width: 350,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            borderRadius: 20,
                            padding: 4,
                        }
                    }>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 10, marginHorizontal: 20 }}>
                            Modal component is a simple way to present content above an enclosing view in a new "window" on top of the current screen.
                        </Text>
                        <Button
                            title="Close"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
