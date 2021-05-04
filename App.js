import * as React from "react";
import { View, Text } from "react-native";
import {ProductsList} from "./public/components/products-list/products-list";

export default function App() {
  return (
    <View
      style={{
          flex: 1,
      }}
    >
        <ProductsList />
    </View>
  );
}
