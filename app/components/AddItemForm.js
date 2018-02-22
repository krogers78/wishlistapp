import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import Heading from './typography/Heading';
import { reduxForm, Field } from 'redux-form';
import MyTextInput from './MyTextInput';
import MyImagePicker from './MyImagePicker';


class AddItemForm extends Component {
    render() {
        const submit = values => {
            // console.log('submitting form', values)
            // fetch('http://localhost:3000/api/add-item', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(values),
            // });
            // this.props.navigation.navigate('WishList', { title: values.title });
            console.log('submit');
        }
        const { handleSubmit } = this.props;
        return (
            <ScrollView style={styles.bottom}>
                {/* TITLE */}
                <Heading text="Title" />
                <Field
                    name={'title'}
                    component={MyTextInput}
                    style={styles.input}
                    placeholder={"Harry Potter and the Chamber of Secrets"}
                />
                {/* IMAGE NEED TO FIGURE OUT IMAGE UPLOAD */}
                <Heading text="Image" />
                {/* <Image source={require('../assets/images/bobross.jpg')} style={styles.image} /> */}
                <MyImagePicker />
                {/* PRICE */}
                <Heading text="Price" />
                <Field
                    name={'price'}
                    component={MyTextInput}
                    style={styles.input}
                    placeholder={"$10.99"}
                    keyboardType={"numeric"}
                />
                {/* LOCATION */}
                <Heading text="Location" />
                <Field
                    name={'location'}
                    component={MyTextInput}
                    style={styles.input}
                    placeholder={"Amazon"}
                />
                {/* LIST */}
                <Heading text="List" />
                <Field
                    name={'list'}
                    component={MyTextInput}
                    style={styles.input}
                    placeholder={"General"}
                />
                {/* BUTTON */}
                <TouchableOpacity onPress={handleSubmit(submit)} style={styles.button}>
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            }
        }),
        marginHorizontal: 20,
        paddingBottom: 10,
        fontSize: 20
    },
    image: {
        width: 180,
        height: 220,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    bottom: {
        marginBottom: 100
    },
    button: {
        backgroundColor: '#FFCDC9',
        alignSelf: 'flex-end',
        width: 200,
        padding: 10,
        borderRadius: 8,
        margin: 10
    },
    btnText: {
        fontSize: 22,
        textAlign: 'center'
    }
})

const validate = values => {
    const errors = {};
    const validateCurrency = price => {
        const currency = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/;
        return currency.test(price);
    }
    console.log(values)
    if (!values.title) {
        errors.title = "Title is required";
    }
    if (!values.price) {
        errors.price = 'Price is required';
    }
    if (!values.list) {
        errors.list = "List is required";
    }
    if (!validateCurrency(values.price)) {
        errors.price = "Not a valid price format";
    }
    return errors;
}

export default reduxForm({ form: 'addItem', validate })(AddItemForm);