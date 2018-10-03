import React, {Component} from 'react';
import { FlatList } from 'react-native';
import Story from "../presentations/story";

class Stories extends Component {

    _renderStory() {
        return <Story/>
    }

    _returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
                keyExtractor={this._returnKey}
                renderItem={() => this._renderStory()}
            />
        )
    }
}

export default Stories;