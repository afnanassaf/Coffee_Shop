/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'udascafe.us', // the auth0 domain prefix
    audience: 'cafe', // the audience set for the auth0 app
    clientId: 'c26RcT6c4qRXWml1PF3mtsgtkb9D8L3n', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
