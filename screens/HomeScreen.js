import React, { useState } from'react';
import { View, StyleSheet } from "react-native";
import {
  BottomNavigation,
  Text,
  Appbar
} from "react-native-paper";


function HomeRoute() {
  return (
    <View>
      <Text variant="titleLarge">Home Content</Text>
      <Text>Your main content goes here.</Text>
    </View>
  );
}

function SettingsRoute() {
  return (
    <View>
      <Text variant="titleLarge">Settings</Text>
      <Text>Adjust your preferences here.</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    settings: SettingsRoute,
  });

  return (
    <View style={styles.container}>
      {/* Top Appbar with a Profile button on the right */}
      <Appbar.Header>
        <Appbar.Action 
          icon="plus-box-outline"
          onPress={() => navigation.navigate("Profile")}
        />
        <Appbar.Content 
          title="PSE Home" 
          style={{
            justifyContent:"center", 
            alignItems: "center"
          }}  
        />
        <Appbar.Action 
          icon="account"
          onPress={() => navigation.navigate("Profile")}
        />
        <Appbar.Action 
          icon="logout"
          onPress={() => navigation.navigate("Auth")}
        />
      </Appbar.Header>

      {/* BottomNavigation handles tab switching */}
      <BottomNavigation 
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  routeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});