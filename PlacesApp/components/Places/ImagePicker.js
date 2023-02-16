import { Alert, Image, StyleSheet, Text, View } from "react-native"
import { launchCameraAsync, useCameraPermissions , PermissionStatus} from 'expo-image-picker';
import { useState } from "react";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

function ImagePicker({onTakeImage}){
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState(null);

    async function verifyPermissions(){
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            
            return permissionResponse.granted;
        }

        if(cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.'
            );

            return false;
        }

        return true;
    }

    async function takeImageHandler(){
        const hasPremission = await verifyPermissions();
        if(!hasPremission){
            return;
        }
        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            onTakeImage(result.assets[0].uri)
        }
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if(image){
        imagePreview = <Image source={{ uri: image }} style={styles.image} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>

        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
      width: '100%',
      height: 200,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary100,
      borderRadius: 4,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });