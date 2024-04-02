// RootNavigation.js

import { CommonActions } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

const NavigationService = {
  goBack: () => {
    navigationRef.current?.goBack();
  },
  getState: () => {
    return navigationRef.current?.getRootState();
  },
  dispatch: (action) => {
    navigationRef.current?.dispatch(action);
  },
  handleBackNavigation: () => {
    const routes = NavigationService.getState()?.routes;
    const previousRoute = routes[routes.length - 2]?.name;
    if (previousRoute === 'camera') {
      NavigationService.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'camera' }
          ],
        })
      );
    } else {
      NavigationService.goBack();
    }
  }
};

export default NavigationService;
