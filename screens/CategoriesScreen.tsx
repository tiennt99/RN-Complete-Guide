import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props: any) => {
    const renderGridItem = (itemData: any) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate('CategoryMeal',{
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}>
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>

        );
    }
    return (
        // <View style={styles.screen}>
        //     <Text>The categories screen</Text>
        //     <Button title="Go to Meals" onPress = {() => {
        //         props.navigation.navigate('CategoryMeal')
        //     }}/>
        // </View>
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
        flex: 1,
        height: 150,
        margin: 15
    }
})

export default CategoriesScreen;