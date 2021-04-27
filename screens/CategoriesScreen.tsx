import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';

import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = (props: any) => {
    const renderGridItem = (itemData: any) => {
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color = {itemData.item.color}
                id={itemData.item.id}
                onSelect={() => {props.navigation.navigate('CategoryMeal', {
                        title: itemData.item.title,
                        categoryId: itemData.item.id
                    })}}
            />

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
    }
})

export default CategoriesScreen;