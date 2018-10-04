import React, {Component} from 'react';
import { FlatList } from 'react-native';
import Post from "../presentations/post";

export default class PostFeed extends Component {

    _renderPost() {
        return <Post context={this}/>
    }

    _returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
                keyExtractor={this._returnKey}
                renderItem={() => this._renderPost()}
            />
        )
    }
}