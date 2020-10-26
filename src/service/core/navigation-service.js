import { NavigationActions, StackActions } from 'react-navigation';
const config = {};
 function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}
 function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}
 function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
 function navigateReset(routeName, params) {
   console.log(routeName,params)
   if(config.navigator && routeName){
    config.navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params,
          }),
        ],
      }),
    );
   }
  
}

export default {setNavigator,navigate,goBack,navigateReset}