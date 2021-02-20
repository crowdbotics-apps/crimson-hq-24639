import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial208005Navigator from '../features/Tutorial208005/navigator';
import NotificationList207977Navigator from '../features/NotificationList207977/navigator';
import Settings207976Navigator from '../features/Settings207976/navigator';
import Settings207968Navigator from '../features/Settings207968/navigator';
import UserProfile207966Navigator from '../features/UserProfile207966/navigator';
import BlankScreen0207944Navigator from '../features/BlankScreen0207944/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial208005: { screen: Tutorial208005Navigator },
NotificationList207977: { screen: NotificationList207977Navigator },
Settings207976: { screen: Settings207976Navigator },
Settings207968: { screen: Settings207968Navigator },
UserProfile207966: { screen: UserProfile207966Navigator },
BlankScreen0207944: { screen: BlankScreen0207944Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
