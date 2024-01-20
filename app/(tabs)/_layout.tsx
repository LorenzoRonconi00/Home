import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: {
                    fontFamily: 'mon-sb'
                }
            }}>
            <Tabs.Screen
                name='home'
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => 
                    <Entypo name='home' color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name='notifiche'
                options={{
                    tabBarLabel: 'Notifiche',
                    tabBarIcon: ({color, size}) => 
                    <FontAwesome5 name='bell' color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name='turni'
                options={{
                    tabBarLabel: 'Turni',
                    tabBarIcon: ({color, size}) => 
                    <FontAwesome name='calendar-o' color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name='bilanci'
                options={{
                    tabBarLabel: 'Bilanci',
                    tabBarIcon: ({color, size}) => 
                    <FontAwesome name='euro' color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name='profilo'
                options={{
                    tabBarLabel: 'Profilo',
                    tabBarIcon: ({color, size}) => 
                    <MaterialIcons name='person-outline' color={color} size={size} />,
                }}
            />
        </Tabs>
    );
};

export default Layout
