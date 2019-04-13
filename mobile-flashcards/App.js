import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import TabNav from './components/TabNav';
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import { createStackNavigator,createAppContainer  } from 'react-navigation'
import { createStore } from 'redux'

// const MainNavigator = createAppContainer(createStackNavigator({
//     home: {
//       screen: TabNav,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   }));

const store = createStore(reducer, middleware);

function ManualStatusBar ({backgroundColor, ...props}) {
    return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
}

export default class App extends React.Component {
  render() {
    return (
       <Provider store={store}>
          <View style={{ flex: 1}}>
          <ManualStatusBar backgroundColor={purple} barStyle="light-content" />
            {/* <MainNavigator /> */}
            <TabNav />
          </View>
        </Provider>
    );
  }
}

