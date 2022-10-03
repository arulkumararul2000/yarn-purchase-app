// import React from 'react';
// import {ScrollView,StyleSheet,Text,Input,View,} from 'react-native';
// import Set from './src/screens/Set';
// import Login from './src/screens/Login/index';
// import Menu from './src/screens/Menu';
// import Purchaseentry from './src/screens/Purchaseentry';

// function App(){ 
//   return (
//     <View style={{backgroundColor:"#f2f2f2",flex:1}}>
//       <Purchaseentry/>
//     </View> 
//   );
// };




import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import Purchaseeditentry from './src/screens/Purchaseeditentry';
import Purchaseentry from './src/screens/Purchaseentry';
import Purchasemain from './src/screens/Purchasemain';
import PurchaseOpenMode from './src/screens/PurchaseOpenMode';
import Purchaserecordedit from './src/screens/Purchaserecordedit';
import Returneditentry from './src/screens/Returneditentry';
import Returnentry from './src/screens/Returnentry';
import Returnmain from './src/screens/Returnmain';
import Returnopenmode from './src/screens/Returnopenmode';
import Returnrecordedit from './src/screens/Returnrecordedit';
import Set from './src/screens/Set';



const Stack = createStackNavigator();

const App = () => {
 
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> */}
          <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu',headerShown:false }}/>
          <Stack.Screen name="Purchaseeditentry" component={Purchaseeditentry} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Purchaseentry" component={Purchaseentry} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Purchasemain" component={Purchasemain} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="PurchaseOpenMode" component={PurchaseOpenMode} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Purchaserecordedit" component={Purchaserecordedit} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Returneditentry" component={Returneditentry} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Returnentry" component={Returnentry} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Returnmain" component={Returnmain} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Returnopenmode" component={Returnopenmode} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Returnrecordedit" component={Returnrecordedit} options={{ title:false,headerShown:false }}/>
          <Stack.Screen name="Set" component={Set} options={{ title:false,headerShown:false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;