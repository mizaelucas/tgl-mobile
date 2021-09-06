import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerScreenProps, useDrawerStatus } from '@react-navigation/drawer';
import Cart from '../components/Cart';

type RootStackParamList = {
    Home: undefined;
    Cart: undefined;
    Newbet: undefined;
};

const cartDrawer = createDrawerNavigator();

function NewBet({ navigation }: DrawerScreenProps<RootStackParamList>) {
    const drawer = useDrawerStatus();
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if (drawer === 'open') {
            return setOpacity(.2);
        };

        if (drawer === 'closed') {
            return setOpacity(1);
        };
    }, [navigation, drawer]);

    return (
        <View style={{...styles.container, opacity: opacity}}>
            <View>
                <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', color: '#707070' }}>NEW BET FOR</Text>
                <Text style={{ fontSize: 17, fontStyle: 'italic', color: '#868686', paddingVertical: 15 }}>Choose a game</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text>Drawer!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const NewBetCart = () => (
    <cartDrawer.Navigator drawerContent={Cart} screenOptions={{ drawerStyle: { width: '60%', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }, drawerPosition: 'right', swipeEnabled: false }}>
        <cartDrawer.Screen name='Cart' component={NewBet} options={{ headerShown: false, sceneContainerStyle: { opacity: 1 }, overlayColor: 'rgba(0, 0, 0, 0.02)'} } />
    </cartDrawer.Navigator>
);

export default NewBetCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
})
