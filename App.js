import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Import your dedicated navigation setup
import Navigation from "./navigation/navigation";


export default function App() {
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}