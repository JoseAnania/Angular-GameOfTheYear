import cors = require("cors");
import express = require("express");
import * as functions from "firebase-functions";

// inicializamos la app según documentación de Firebase
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// creamos una propiedad de referencia a la BD
const db = admin.firestore();

// Petición GET de Prueba
export const helloWorld = functions.https.onRequest(async(request, response) => {
  response.json({mensaje: "Hola Mundo desde Funciones de Firebase!"});
});

// Petición GET para obtener los Juegos
export const getGOTY = functions.https.onRequest(async (request, response) => {
    
    // creamos una referencia a nuestra colección de juegos
    const goytRef = db.collection('goty');

    // obtenemos la colección
    const docsSnap = await goytRef.get();
    const juegos = docsSnap.docs.map((doc: { data: () => any; }) => doc.data());
    
    // enviamos lo obtenido
    response.json(juegos);
  });

  // Creamos un servidor Express (de Node) (esta es otra forma de realizar peticiones get, post, etc...)
  const app = express();
  app.use(cors({origin: true}));

  // Petición GET para obtener los Juegos
  app.get('/goty', async (req, res) => {

    // creamos una referencia a nuestra colección de juegos
    const goytRef = db.collection('goty');

    // obtenemos la colección
    const docsSnap = await goytRef.get();
    const juegos = docsSnap.docs.map((doc: { data: () => any; }) => doc.data());
    
    // enviamos lo obtenido
    res.json(juegos);
  });

  // Petición POST para incrementar los votos
  app.post('/goty/:id', async (req, res) => {
    
    // obtenemos el id que recibimos
    const id = req.params.id;

    // obtenemos el juego según el id
    const gameRef = db.collection('goty').doc(id);
    const gameSnap = await gameRef.get();

    // validamos que el id exista
    if (!gameSnap.exists) {
        res.status(404).json({
            ok: false,
            mensaje: "No existe un juego con ese ID " + id
        });
    } else {

        // si el juego existe, obtenemos su estado
        const antes = gameSnap.data();

        // actualizamos los votos (sumando 1)
        gameRef.update({
            votos: antes.votos + 1
        });

        res.json({
            ok: true,
            mensaje: `Gracias por tu voto a ${antes.name}`
        });
    }
  });

  // enviamos las peticiones
  export const api = functions.https.onRequest(app);
