import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const puppies = [
  {name: 'Rocket', address: 'My love'},
  {name: 'Radost', address: 'My sole'},
  {name: 'Robin', address: 'My proud'},
  {name: 'Okame', address: 'Little kiwi shit'},
]

export default class HomeScreen extends React.Component {
  state={
    search: null
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.text}>Here is new App</Text>
            <TextInput 
              style={styles.input}
              placeholder="Live Search"
              onChangeText={text => {
                this.setState({ search: text })
              }}
              value={this.state.search} />
        </View>
        {
          puppies.filter(place => {
            return !this.state.search || 
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1}).map((place, index) => {
            return(
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
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flex: 1
  },
  text: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300',
  },
  index: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  name: {
    flexDirection: 'column',
    flex: 8
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
