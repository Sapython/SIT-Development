// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'sit-manager',
    appId: '1:690627613189:web:6824650edf61bf8341826c',
    storageBucket: 'sit-manager.appspot.com',
    apiKey: 'AIzaSyCr3OU4kqHPIJwM3yy0kB-hcOWhtk5cD3I',
    authDomain: 'sit-manager.firebaseapp.com',
    messagingSenderId: '690627613189',
    measurementId: 'G-7E3E6R0KLW',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
