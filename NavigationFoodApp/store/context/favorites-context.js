import { createContext, useState} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}){
    const [favoriteMealds, setFavoriteMealIds] =  useState([]);

    function addFavorite(id){
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id){
        setFavoriteMealIds((currentFavIds)=>
            currentFavIds.filter((mealId)=> mealId !== id)
        );
    }

    const value = {
        ids: favoriteMealds,
        addFavorite :addFavorite,
        removeFavorite :removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;