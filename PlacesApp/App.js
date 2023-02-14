import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';
import PlaceDetails from './screens/PlaceDetails';
import Map from './screens/Map';
import IconButton from './components/UI/IconButton';
import {Colors} from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary600},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton 
                  color={tintColor} 
                  size={24} 
                  icon="add" 
                  onPress={() => navigation.navigate("AddPlace")} 
                /> 
              ) 
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{title: "Add a new Place"}} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
