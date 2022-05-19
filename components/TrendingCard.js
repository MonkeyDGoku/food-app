import {
    View, Text, TouchableOpacity,
    Image, Platform, StyleSheet
} from 'react-native'
import React from 'react'

import { SIZES, COLORS, FONTS, icons } from "../constants"
import { BlurView } from 'expo-blur'


const RecipeCardInfo = ({ recipeItem }) => {
    return (
        <BlurView
            intensity={70}
            tint="dark"
            style={styles.recipeCardContainer}
        >

        </BlurView>
    )
}

export default function TrendingCard({
    containerStyle,
    recipeItem,
    onPress
}) {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* bg img */}
            <Image
                source={recipeItem.image}
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Category */}
            <View style={{
                position: "absolute",
                top: 20,
                left: 15,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 5,
                backgroundColor: COLORS.transparentGray,
                borderRadius: SIZES.radius
            }}>
                <Text style={{
                    color: COLORS.white,
                }}>
                    {recipeItem.category}
                </Text>
            </View>
            {/* Card INfo */}
            <RecipeCardInfo
                recipeItem={recipeItem}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})