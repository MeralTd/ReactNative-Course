import { View, Text ,StyleSheet, Pressable} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress}){
    return ( 
        <View style ={styles.buttonOuterContainer}>
            <Pressable 
                style ={ (presed) => 
                    presed
                        ? [styles.buttonInnerContainer,styles.presed]
                        : styles.buttonInnerContainer
                } 
                onPress={onPress}
                android_ripple={{color:Colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>

        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    presed:{
        opacity:0.75
    }
})