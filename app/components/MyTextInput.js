import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function MyTextInput(props) {
    const { input, meta: { touched, error }, ...inputProps } = props;
    return (
        <View>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                style={styles.input}
                underlineColorAndroid='transparent'
            />
            {touched && (error && <Text style={styles.error}>{error}</Text>)}
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingBottom: 10,
        fontSize: 20
    },
    error: {
        marginHorizontal: 20,
        marginTop: 5,
        color: 'red',
        fontWeight: 'bold'
    }
});