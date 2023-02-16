import PlaceForm from "../components/Places/PlaceForm";
import { insertPlaces } from "../util/database";

function AddPlace({navigation}){

    async function createPlaceHandler(place){
        await insertPlaces(place);     
        navigation.navigate('AllPlaces')
    }

    return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlace;