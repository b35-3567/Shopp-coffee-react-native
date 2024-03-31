import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text,View } from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/main/AppContext';
import Home from './src/app/main/tabs/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import FocusExample from './src/asm/screens/FocusExample';
import App1 from './src/asm/screens/App1';
import Home_Plant from './src/asm/tabs/Home_Plant';
import PlantNavigation from './src/asm/PlantNavigation';
import { AppProvider1 } from './src/demo/Context/AppContext1';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCart from './src/demo/Context/ShoppingCart';
import Detail from './src/demo/Context/Detail';
import { NavigationContainer } from '@react-navigation/native';
import Bai1 from './src/Lab/Lab1/Bai1';
import Bai2 from './src/Lab/Lab1/Bai2';
import Bai3 from './src/Lab/Lab1/Bai3';
import MyComponent from './src/demo/MyComponent';
import Slidebar from './src/asm/stack/Slidebar';
import Plant_Detail from './src/asm/stack/Plant_Detail';
import FrT from './src/asm/stack/FrT';
import SquareCheckbox from './src/asm/stack/SquareCheckbox';
import Plant_Card from './src/asm/stack/Plant_Card';
import Sc1 from './src/demo/Sc1';
import Sc2 from './src/demo/Sc2';
import Sc3 from './src/demo/Sc3';
import Bai1_Lab2 from './src/Lab/Lab2/Bai1_Lab2';
import Bai2_Lab2 from './src/Lab/Lab2/Bai2_Lab2';
import Bai4_Lab2 from './src/Lab/Lab2/Bai4_Lab2';
import AnimatedSquares from './src/Lab/Lab2/AnimatedSquares';
import Category from './src/asm/stack/Category';
import Register_plant from './src/asm/screens/Register_plant';
import Main from './src/Lab/Lab2_true/Main';
import Bai1_Lab3 from './src/Lab/Lab3/Bai1_Lab3';
import AnimatedBox from './src/Lab/Lab2/AnimatedBox';
import ParallelAnimatedBox from './src/Lab/Lab2/ParallelAnimatedBox';
import SequenceAnimatedBox from './src/Lab/Lab2/SequenceAnimatedBox';
import Bai6_Lab3 from './src/Lab/Lab2/Bai6_Lab3';
import ParallelSequenceAnimatedBox from './src/Lab/Lab2/ParallelSequenceAnimatedBox';
import ExampleAnimation from './src/Lab/Lab2/ExampleAnimation';
import Anim6 from './src/Lab/Lab2/Anim6';
import Sc_Useffect from './src/demo/Sc_Useffect';
import Sc6_3_24 from './src/demo/Sc6_3_24';
import Sc8_3_24 from './src/demo/Sc8_3_24';
import Sc1_8_3_24 from './src/demo/Sc1_8_3_24';
import ListItem from './src/demo/ListItem';
import Sc3_8_3_24 from './src/demo/Sc3_8_3_24';
import ScGesture from './src/demo/ScGesture';
import Sc3_15_3_24 from './src/demo/Sc3_15_3_24';
import Sc4_15_3_24 from './src/demo/Sc4_15_3_24';
import Bai3_Lab2 from './src/Lab/Lab2/Bai3_Lab2';
import Bai5_Lab2 from './src/Lab/Lab2/Bai5_Lab2';
import Screen from './src/demo/Screen';
import Body from './src/Lab/Lab2_true/Body';
import { Bai3_Lab3 } from './src/Lab/Lab3/Bai3_Lab3';
import Bai4_Lab3 from './src/Lab/Lab3/Bai4_Lab3';
import Screen1_Redux from './src/redux/Screen1_Redux';
//import { Provider } from 'react-redux';
//import store from './src/redux/Store';
import { Provider } from 'react-redux';
// bottom tab nha import store from './src/Redux_demo/store';
import ProductDemo from './src/Redux_demo/ProductDemo';
import Demo_Redux_1 from './src/Redux_demo/Demo_Redux_1';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartDemo from './src/Redux_demo/CartDemo';
import DetailDemo from './src/Redux_demo/DetailDemo';
/*  Badge
import store from './src/badge/store';
import HomeSc from './src/badge/HomeSc';
import CartSc from './src/badge/CartSc';
*/
 
 
//API REDUX
import store from './src/API_Redux/store';
import LoginRedux from './src/API_Redux/LoginRedux';
import UserInfo from './src/API_Redux/UserInfo';
import Cart_API from './src/API_Redux/Cart_API';
import CartIcon from './src/badge/CartIcon';
import Bill_API from './src/API_Redux/Bill_API';
import MyCarousel from './src/asm/MyCarousel';
 
 
 
 
 /*
 // redux client
import Home_Demo_true from './src/Demo_Redux_true/Home_Demo_true';
import store from './src/Demo_Redux_true/store';
import Cart_Demo_true from './src/Demo_Redux_true/Cart_Demo_true';
 */
const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const handleScroll = () => {
    // Handle scroll event
  };
  return (
/*
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>

    /*
    <App1/>
     <FocusExample/>
      <PlantNavigation/>
     */

      /*
      <NavigationContainer>
      <AppProvider1>
        <Stack.Navigator>
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </AppProvider1>
    </NavigationContainer>
    */
        //<FocusExample/>

     
      //<Bai3_Lab3 onScroll={handleScroll}/>
    //  <Bai4_Lab3/>
     // <Screen/>
      // <Register_plant/>
  //<Sc1/>
  //<Sc2/>
  //<Sc3/>

  //lab3
  //<Bai1_Lab2/>
  //<Bai2_Lab2/>
  //<Bai3_Lab2/>
 //<Bai5_Lab2/>
   //<ExampleAnimation/>
  //<Bai4_Lab2/>
//lab3
   //ASM
  
//ASM
//lab4
  //<Sc4_15_3_24/> 
//<Screen/>
 //lab4

//lab1
//<Bai1/>
//<Bai2/>
//<Bai3/>
 //lab2
//<Main/>



 //<AnimatedSquares/>
 //<Main/>
    //<AnimatedBox/>
 //<Bai1_Lab3/>
//  <AnimatedSquares/>
     //<Plant_Detail/>
   //  <SquareCheckbox/>
   //<Plant_Card/>
 //<Bai1/>
// <FocusExample/>
   //<Category/>
// <Bai3/>
// <MyComponent/>
     //<Slidebar/>
     //<Bai6_Lab3/>
   //<ExampleAnimation/>
   //<Anim6/>
   //<Main/>
   //<ParallelSequenceAnimatedBox/>
   ///////////////////////////////////////////////////
   //<Sc_Useffect/>
   //<Sc6_3_24/>
    //<Sc8_3_24/>
   // <Sc1_8_3_24/>
   //<ListItem id={ undefined } name={ undefined } description={'abc' }/>
   //<Sc3_8_3_24/>
   //<ScGesture/>
   //<Sc3_15_3_24/>
  
   //<Screen/>
   /*
   <Provider store={store}>
      <Screen1_Redux/>
   </Provider>
  */
 /*
   <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Product" component={ProductDemo} />
          <Tab.Screen name="Cart" component={CartDemo} />
          <Tab.Screen name="Detail" component={DetailDemo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
 */
//<Demo_Redux_1/>
/* true này nha bá má
<Provider store={store}>
   <Home_Demo_true/>
</Provider>
*/



 /*
 //redux client
<Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home_Demo_true} />
          <Tab.Screen name="Cart" component={Cart_Demo_true} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
 */

    <PlantNavigation/>
   //<MyCarousel/>
 /*
   // API redux
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginRedux} />
          <Stack.Screen name="Info" component={UserInfo} />
          <Stack.Screen name="Cart" component={Cart_API} />
          <Stack.Screen name="Bill" component={Bill_API} />
          
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
 */
/*
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeSc} />
        <Stack.Screen name="Cart" component={CartSc} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  */
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



