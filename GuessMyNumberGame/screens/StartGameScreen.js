import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors"; 
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
       
    }

    function confirmInputHandler(){
        const chosenNumber  = parseInt(enteredNumber);
        console.log(chosenNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0  || chosenNumber>99){
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99.',
                [{text:'Okey', style:'destructive',onPress: resetInputHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber); 
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>

            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    }, 
    
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }

})