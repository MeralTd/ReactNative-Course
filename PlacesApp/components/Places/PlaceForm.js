import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Places } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({onCreatePlace}){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    function changeTitleHandler(enteredText) {
      setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageUri) {
      setSelectedImage(imageUri)
    }

    const pickLocationHandler = useCallback((location) => {
      setPickedLocation(location)
    }, []);

    function savePlaceHandler() {
      const placeData = new Places(enteredTitle, selectedImage, pickedLocation);
      onCreatePlace(placeData)
    }
  
    return (
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeTitleHandler}
            value={enteredTitle}
          />
        </View>
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>

      </ScrollView>
    );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
      flex: 1,
      paddingHorizontal: 24,
      // padding: 24,
      marginVertical: 12
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 4,
      color: Colors.primary500,
    },
    input: {
      marginVertical: 8,
      paddingHorizontal: 4,
      paddingVertical: 8,
      fontSize: 16,
      borderBottomColor: Colors.primary800,
      borderBottomWidth: 2,
      backgroundColor: 'white',
      borderRadius: 3

    },
  });