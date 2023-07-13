import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image:
      "https://kristineskitchenblog.com/wp-content/uploads/2022/10/lasagna-recipe-16-2.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.50",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/tandoori-chicken-500x375.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://brokebankvegan.com/wp-content/uploads/2022/10/Chilaquiles-Rojos-1200x1200-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "Heathy and Tasty",
    price: "$21.50",
    image:
      "https://feelgoodfoodie.net/wp-content/uploads/2021/06/chicken-caesar-pasta-salad-05.jpg",
  },
  {
    title: "Tandoori",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.50",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/tandoori-chicken-500x375.jpg",
  },
  {
    title: "Pasta",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image:
      "https://kristineskitchenblog.com/wp-content/uploads/2022/10/lasagna-recipe-16-2.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
