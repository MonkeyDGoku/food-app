import { View, Text, Image } from 'react-native'
import React from 'react'
import { images, COLORS } from "../constants"
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function TabIcon({ focused, icon }) {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            width: 50,
            position: "relative"
        }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.darkGreen : COLORS.lightLime
                }}
            />

            {focused && (<View
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 5,
                    height: 5,
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    backgroundColor: COLORS.darkGreen
                }}
            />)}



        </View>
    )
}