import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={{borderWidth: 1}}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    // let pw = "";
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text></Text>

            {/* Ex1B: Add a Picker labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type:</Text>

            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
                style={{backgroundColor: 'grey'}}>
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="Guest" value="Guest" />
            </Picker>

            {/* Ex1G: Create a TextInput labelled "User Name". */}
            {/* <Text>User Name:</Text> */}
            {/* <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)} /> */}

            <InputBox
                label="User Name:"
                onChangeText={(value) => setName(value)}
            />

            {/* Ex1A: Display "Password:" with TextInput */}
            {/* <Text>Password:</Text> */}
            {/* <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)} /> */}

            <InputBox
                label="Password:"
                onChangeText={(value) => setPw(value)}
            />

            {/* Ex1C: Add Button with title "LOG IN". */}
            {/* Ex1D: Display Alert "Welcome!" when pressed. */}
            <Button
                onPress={() => Alert.alert("Welcome!")}
                title="LOG IN"
            />

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled "Alternative LOG IN" with Alert "Hi hi!" */}

            {/* Ex1F: Change Alert message to Toast message */}
            <TouchableOpacity
                onPress={() => {
                    const correctPassword = '123';
                    let mymessage = 'Error! Wrong Password!';

                    if (pw == correctPassword) {
                        mymessage = 'Welcome ' + type + ' ' + name;
                    }

                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                }}>
                <Text>Alternative LOG IN</Text>
            </TouchableOpacity>

            <Text>Entered password: {pw}</Text>

        </View>
    );
};

export default MyApp;
