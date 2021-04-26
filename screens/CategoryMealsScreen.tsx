import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props: any) => {
    const categoryId = props.route.params.categoryId
    const selectCategory = CATEGORIES.find(cate => cate.id === categoryId);
    return (
        <View style={styles.screen}>
            <Text>{selectCategory?.title}</Text>
            <Button title="Go to detail" onPress = {() => {
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title="Back" onPress = {() => {
                props.navigation.pop();
            }}/>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default CategoryMealsScreen;