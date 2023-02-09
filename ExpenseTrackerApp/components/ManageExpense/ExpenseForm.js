import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

function ExpenseForm(){
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input 
                    label="Amount" 
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                    style={styles.rowInput}
                />
                <Input 
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }}
                    style={styles.rowInput}
                />
            </View>
            <Input 
                label="Description" 
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description
                }}
            />
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form:{
        marginTop: 80
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput:{
        flex:1
    }
});