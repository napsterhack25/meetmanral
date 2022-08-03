import React, { Component } from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }
  render() {
    const AppNavigator = createStackNavigator(
      {
        Home: HomeScreen,
        Profile: ProfileScreen,
      },
      {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#FFF",
        },
      }
    );

    const Navigator = createAppContainer(AppNavigator);

    const Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={{
              uri: "https://meetmanral.in/public/images/front/manral.png",
            }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    );

    return (
      <>
        {this.state.isVisible === true ? (
          Splash_Screen
        ) : (
          <Navigator>
            <HomeScreen />
          </Navigator>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
  },
});
