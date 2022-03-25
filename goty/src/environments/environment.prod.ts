// agregamos la dirección URL que es única para producción
export const environment = {
  firebase: {
    projectId: 'firestore-grafica-641a9',
    appId: '1:416807061068:web:080e96f7a8ef25c9c096e9',
    storageBucket: 'firestore-grafica-641a9.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBgAJS4GClaXJ3htrzpP_1MfuUaJhrKinI',
    authDomain: 'firestore-grafica-641a9.firebaseapp.com',
    messagingSenderId: '416807061068',
  },
  production: true,
  url: 'https://us-central1-firestore-grafica.cloudfunctions.net',
};
