import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants"
import { CategoryCard, TrendingCard } from '../components';

const Home = ({ navigation }) => {

    function renderHeader() {
        return <View style={{
            flexDirection: "row",
            marginHorizontal: SIZES.padding,
            alignItems: "center",
            height: 88
        }}>
            {/* text */}
            <View style={{
                flex: 1
            }}>
                <Text style={{
                    color: COLORS.darkGreen,
                    ...FONTS.h2
                }}> Hello Anup</Text>
                <Text style={{
                    marginTop: 3,
                    color: COLORS.gray,
                    ...FONTS.body3
                }}> What you want to cook today?</Text>
            </View>

            {/* Image */}
            <TouchableOpacity
                onPress={() => console.log("Profile")}
            >
                <Image
                    source={images.profile}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </TouchableOpacity>
        </View>
    }

    function renderSerachBar() {
        return <View
            style={{
                flexDirection: "row",
                height: 50,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
            }}
        >
            {/* Search */}
            <Image source={icons.search}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
            />

            <TextInput
                style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3
                }}
                placeholder="Search Recipes"
                placeholderTextColor={COLORS.gray}
            />
        </View>
    }


    function renderSeeRecipeCard() {
        return <View style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            borderRadius: 10,
            backgroundColor: COLORS.lightGreen
        }}>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                width: 100
            }}>
                <Image source={images.recipe}
                    style={{
                        width: 80,
                        height: 80
                    }}
                />

            </View>

            <View
                style={{
                    flex: 1,
                    paddingVertical: SIZES.radius
                }}>
                <Text style={{
                    width: "70%",
                    ...FONTS.body4
                }}>
                    You have 12 recipes that you haven't tried
                </Text>

                <TouchableOpacity
                    style={{
                        margintop: 10
                    }}
                    onPress={() => console.log("See Recipes")}
                >
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            textDecorationLine: 'underline',
                            ...FONTS.h4
                        }}>See Recipes</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    function renderTrendingSection() {
        return (<View
            style={{
                marginTop: SIZES.padding
            }}>
            <Text
                style={{
                    marginHorizontal: SIZES.padding,
                    ...FONTS.h2
                }}
            >
                Trending Recipe
            </Text>
            <FlatList
                data={dummyData.trendingRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <TrendingCard recipeItem={item} />
                    )
                }}
            />

        </View>)
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* Search Bar  */}
                        {renderSerachBar()}
                        {/* See recipe */}
                        {renderSeeRecipeCard()}
                        {/* Trending */}
                        {renderTrendingSection()}
                        {/* Category header */}
                    </View>
                }

                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />

        </SafeAreaView>
    )
}

export default Home;