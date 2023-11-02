import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component {

  state = {
    screenText: 'Press a button!'
  }

  changeText = (text) => {
    console.log(text + ' has been pressed!')
    this.setState({
      screenText: text
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View>
        <Text style={{fontSize: 40, color: 'white'}}>{this.state.screenText}</Text>
        <StatusBar style="light" />
        </View>
        <View style={styles.NavContainer}> 
          <View style={styles.NavBar}> 
            <Pressable onPress={() => this.changeText('Favorites')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} color='royalblue' />
            </Pressable>

            <Pressable onPress={() => this.changeText('Chat')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="chat-bubble" height={iconHeight} width={iconWidth} color='royalblue' />
            </Pressable>

            <Pressable onPress={() => this.changeText('User')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="user-shape" height={iconHeight} width={iconWidth} color='royalblue' />
            </Pressable>

            <Pressable onPress={() => this.changeText('Upload photos')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="photo-library" height={iconHeight} width={iconWidth} color='royalblue' />
            </Pressable>

            <Pressable onPress={() => this.changeText('Settings')} style={styles.IconBehave}
            android_ripple={{borderless: true, radius: 50}}>
              <Icon name="settings-cogwheel-button" height={iconHeight} width={iconWidth} color='royalblue' />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,

  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '95%',
    justifyContent: 'space-evenly',
    borderRadius: 40
  },

  IconBehave: {
    padding: 14
  }
});
