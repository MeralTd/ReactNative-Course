import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS , CATEGORIES} from '../data/dummy-data';

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((caregory) => caregory.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    },[catId, navigation]);
    

    function renderMealItem(itemData){

        const item = itemData.item;

        // const mealItemProps = {
        //   title: item.title,
        //   imageUrl: item.imageUrl,
        //   affordability: item.affordability,
        //   complexity: item.complexity,
        //   duration: item.duration,
        // };
      
        return (
            <MealItem itemData={item} />
        );
    }
    return (
        <View style={styles.container}>
             <FlatList 
                data={displayedMeals} 
                keyExtractor= {(item)=>item.id}
                renderItem= {renderMealItem}
        />         
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});