import {
    CommonActions,
    createNavigationContainerRef,
    DrawerActions,
    StackActions,
  } from '@react-navigation/native';
  
  export const navigationRef = createNavigationContainerRef();
  
  export function navigate(name, params) {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(name, params);
    }
  }
  
  export function push(name, params = {}) {
    if (navigationRef.isReady()) {
      if (params.hasOwnProperty('type') && params.type === 'drawer') {
        navigationRef.dispatch(DrawerActions.jumpTo(name, params));
      } else {
        navigationRef.dispatch(StackActions.push(name, params));
      }
    }
  }
  
  export function pushDrawer(name, params = {}) {
    params.type = 'drawer';
    push(name, params);
  }
  
  export function pop(n = 1) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop(n));
    }
  }
  
  export function popToTop() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  }
  
  export function reset(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: name,
              params: params,
            },
          ],
        }),
      );
    }
  }
  
  export function goBack() {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.goBack());
    }
  }
  
  export function drawer(open = true) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        open ? DrawerActions.openDrawer() : DrawerActions.closeDrawer(),
      );
    }
  }
  
  global.navigation = {
    navigationRef: navigationRef,
    navigate: navigate,
    reset: reset,
    push: push,
    pushDrawer: pushDrawer,
    pop: pop,
    popToTop: popToTop,
    goBack: goBack,
    drawer: drawer,
  };
  