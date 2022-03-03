// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://apis.datos.gob.ar/georef/api',
  firebase: {
    apiKey: "AIzaSyDIG4wd_Qzs-jKYg7RfPRKhIW7XBLvY6RA",
    authDomain: "oscar-flockit.firebaseapp.com",
    projectId: "oscar-flockit",
    storageBucket: "oscar-flockit.appspot.com",
    messagingSenderId: "253031809713",
    appId: "1:253031809713:web:0d93e8d3d2f514f9061890",
    measurementId: "G-3TC1Q2M9S3"
  },
  Logging: {
    IsFirebase: true,
    LogLevel: "All"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
