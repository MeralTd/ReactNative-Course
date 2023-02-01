import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
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
    
    return <MealsList items={displayedMeals} />
   
}

export default MealsOverviewScreen;

