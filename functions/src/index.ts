const functions = require('firebase-functions');
// const FormData = require('form-data');
const nodeFetch = require('node-fetch');
const cors = require('cors');
const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};
const corsHandler = cors(corsOptions);

exports.recognisePlate = functions.https.onRequest(
  (request: any, response: any) => {
    corsHandler(request, response, () => {
      let body = new URLSearchParams();
      body.append('upload', request.body.image);
      body.append('regions', 'in');
      nodeFetch('https://api.platerecognizer.com/v1/plate-reader/', {
        method: 'POST',
        headers: {
          Authorization: 'Token a490308e683271f93fe228f61b737bd3bdbb35e5',
        },
        body: body,
      })
        .then((data: any) => {
          data.json().then((data: any) => {
            console.log("REC: ",data);
            if (data.results.length > 0) {
              response.status(200).send(data.results[0]);
            } else {
              response.status(400).send(data);
              // response.status(400).send('Error in recognition of numberplate');
            }
          });
        })
        .catch((error: any) => {
          console.log(error);
          response.status(400).send(error);
        });
    });
  }
);
