import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { imageSet } from '../redux/actions'

class MyImagePicker extends React.Component {
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.props.setImage(result.uri);
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