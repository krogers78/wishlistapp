import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text } from 'react-native';

import MyTextInput from './MyTextInput';

class MyForm extends Component {
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <Text>Email</Text>
                <Field
                    name={'email'}
                    component={MyTextInput}
                />
            </ScrollView>
        );
    }
}

export default reduxForm({ form: 'signIn' })(MyForm);