import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { imageSet } from '../redux/actions'

class MyImagePicker extends Component {
    render() {
        let { image } = this.props.data;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image.exists && <Image source={{ uri: `data:image/png;base64,${image.url}` }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsEditing: true
        });
        if (!result.cancelled) {
            this.props.setImage(result.base64);
        }
    };
}
const mapStateToProps = state => {
    return {
        data: state.data
    };
}
const mapDispatchToProps = dispatch => {
    return {
        setImage: image => {
            dispatch(imageSet(image));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyImagePicker);