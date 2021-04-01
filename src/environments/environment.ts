// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_Base_URL: "https://marketoo-api-service.azurewebsites.net/api/",
  Signalr_Base_URL: "https://marketoo-api-service.azurewebsites.net/",

  // our server push-notification keys
  push_notification_public_key: "BGcyc-_QabAQ0yYUnSiSzHKy5K2vZueQIU1JZzswP9XuXRimVv5OWGEP8KccL0wu70jNgHGbTiWGa08bXIabYAo",
  push_notification_private_key: "2FzAHrZuhdRqcrz2YEw3OtlHtUYXkldS1jiTQNEIz5w"


  // API_Base_URL: "http://localhost:5000/api/",
  // Signalr_Base_URL: "http://localhost:5000/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
