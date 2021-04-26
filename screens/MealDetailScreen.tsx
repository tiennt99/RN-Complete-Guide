import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
const MealDetailScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The meal detail screen</Text>
            <Button title="Go to back" onPress = {() => {
                props.navigation.popToTop();
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
export default MealDetailScreen;