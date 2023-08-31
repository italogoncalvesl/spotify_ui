import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/home";
import { SearchScreen } from "../pages/search";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "rgba(0, 0, 0, 1)",
            justifyContent: "space-around",
          },
        }}
      >
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#FFFFFF",
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" color={"#FFFFFF"} size={20} />
            ),
          }}
        />
        <Screen
          name="Search"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#FFFFFF",
            tabBarIcon: ({ size, color, focused }) => (
              <Feather name="search" color={"#FFFFFF"} size={20} />
            ),
          }}
        />
        <Screen
          name="Bibliotica"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => (
              <Feather
                name={focused ? "home" : "airplay"}
                color={color}
                size={20}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
