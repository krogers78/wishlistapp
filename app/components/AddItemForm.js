import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Heading from './typography/Heading';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MyTextInput from './MyTextInput';
import MyImagePicker from './MyImagePicker';

class AddItemForm extends Component {
    render() {
        const submit = values => {
            const newData = {
                ...values,
                image: this.props.data.image.url
            }
            fetch('http://kloerogers.com/api/add-item', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            this.props.data.image = {};
            this.props.navigation.navigate('Home');
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
                    placeholder={"Harry Potter and the Chamber of Secrets"}
                />
                {/* IMAGE */}
                <Heading text="Image" />
                <MyImagePicker />
                {/* PRICE */}
                <Heading text="Price" />
                <Field
                    name={'price'}
                    component={MyTextInput}
                    placeholder={"$10.99"}
                    keyboardType={"numeric"}
                />
                {/* LOCATION */}
                <Heading text="Location" />
                <Field
                    name={'location'}
                    component={MyTextInput}
                    placeholder={"Amazon"}
                />
                {/* LIST */}
                <Heading text="List" />
                <Field
                    name={'list'}
                    component={MyTextInput}
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
const mapStateToProps = state => {
    return {
        data: state.data
    };
}

AddItemForm = connect(mapStateToProps)(AddItemForm);
export default reduxForm({ form: 'addItem', validate })(AddItemForm);