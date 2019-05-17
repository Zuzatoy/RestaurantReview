import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class RestaurantRow extends Component {
    render() {
        const {
            place,
            index
        } = this.props;

        return (
            <View key={place.name} style={{
                flexDirection: 'row'
              }}>
              <View style={styles.index}>
                <Text>{index + 1}</Text>
              </View>
                <View style={styles.name}>
                  <Text>{place.name}</Text>
                  <Text style={{color: 'purple'}}>{place.address}</Text>
                </View>
                <Text style={{flex: 1}}>Info</Text>
              </View>
        )
    }

}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row'
    },
    edges: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
    nameAddress: {
      flexDirection: 'column',
      flex: 8
    },
    addressText: {
      color: 'grey'
    },
  })
  