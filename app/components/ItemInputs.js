import React, { Component } from 'react';
import { ScrollView, CameraRoll, TextInput, Text, StyleSheet, Platform, Image, View, Button, TouchableOpacity } from 'react-native';
import Heading from './typography/Heading';
// import Header from './Header';
import { reduxForm, Field } from 'redux-form';

import MyTextInput from './MyTextInput';

class ItemInputs extends Component {
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    render() {
        const submit = values => {
            console.log('submitting form', values)
            fetch('http://localhost:3000/api/add-item', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            this.props.navigation.navigate('WishList', { title: values.title });
        }
        const { handleSubmit } = this.props;
        return (
            <ScrollView style={styles.bottom}>
                <Button title="Load Images" onPress={this._handleButtonPress} />
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
                <Image source={require('../assets/images/bobross.jpg')} style={styles.image} />
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
export default reduxForm({ form: 'addItem' })(ItemInputs);