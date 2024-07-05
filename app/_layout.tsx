import react from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import home from './(tabs)/home'
import ajustes from './(tabs)/ajustes'
import { SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";

const Stack = createStackNavigator();
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name = 'home' component={home}/>
          <Stack.Screen name = 'ajustes' component={ajustes}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
/* 

<Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>

*/