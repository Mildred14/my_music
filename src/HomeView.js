import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {getMusicData} from './api-client'
export default class HomeView extends Component<Props>{
    state={
        artist: null
    }

componentDidMount() {
    getMusicData().then(data => this.setState({artist: data}))
}
render(){
    const artist = this.state.artist
    console.warn(artist)

    return(
        <View style={StyleSheet.container}>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
}); 