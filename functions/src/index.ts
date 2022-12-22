const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const Razorpay = require('razorpay');
// const FormData = require('form-data');
const nodeFetch = require('node-fetch');
const cors = require('cors');
const allowedOrigins = [
  'https://sit-manager.web.app',
  'https://sit-manager.firebaseapp.com',
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
const corsHandler = cors({origin: true});

// var corsOptionSomani = {
//   origin: function (origin: any, callback: any) {
//     callback(null, true);
//   },
// };

const corsSomani = require('cors')(corsOptions);
let key_id = 'rzp_test_qv29k7WExrrxBW';
let  key_secret = 'luD8M3dv2ujxsDhhs6uW578y';

let instance = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});

exports.createOrder = functions.https.onRequest((req: any, res: any) => {
  return corsSomani(req, res, () => {
    let options = {
      amount: req.body.amount,
      currency: 'INR',
      receipt: req.body.receipt,
    };
    instance.orders.create(options, (err: any, order: any) => {
      order ? res.status(200).send(order) : res.status(500).send(err);
    });
  });
});

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
            console.log('REC: ', data);
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

exports.createUser = functions.https.onRequest(
  (request: any, response: any) => {
    corsHandler(request, response, () => {
      // console.log('REQUEST: ',request.body);
      // console.log('RESPONSE: ',response);
      const data = request.body;
      if (!data.email) {
        // Throwing an HttpsError so that the client gets the error details.
        response
          .status(400)
          .send('The function must be called with a valid email');
      }
      if (!data.password) {
        // Throwing an HttpsError so that the client gets the error details.
        response
          .status(400)
          .send('The function must be called with a valid password');
      }
      if (!data.name) {
        // Throwing an HttpsError so that the client gets the error details.
        response
          .status(400)
          .send('The function must be called with a valid name');
      }
      if (!data.phone) {
        // Throwing an HttpsError so that the client gets the error details.
        response
          .status(400)
          .send('The function must be called with a valid phone');
      }
      admin
        .auth()
        .createUser({
          email: data.email,
          emailVerified: false,
          phoneNumber: data.phone,
          password: data.password,
          displayName: data.name,
          disabled: false,
        })
        .then((userRecord: any) => {
          response.status(200).send(userRecord);
        })
        .catch((error: any) => {
          console.log('Error creating new user:', error);
          response.status(400).send(error);
        });
    });
  }
);
export const removeUser = functions.firestore.document("/users/{uid}").onDelete((snapshot:any, context:any) => {
  return admin.auth().deleteUser(context.params.uid);
});
// exports.createUser = functions.https.onCall((data:any,context:any)=>{
//   if (!data.email) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid email');
//   }
//   if (!data.password) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid password');
//   }
//   if (!data.name) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid name');
//   }
//   if (!data.phone) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid phone');
//   }
//   if (!data.permanentAddress) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid permanent address');
//   }
//   if (!data.currentAddress) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid current address');
//   }
//   if (!data.photoUrl) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid photo URL');
//   }
//   // Checking that the user is authenticated.
//   if (!context.auth) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
//         'while authenticated.');
//   }
//   admin.auth().createUser({
//     email: data.email,
//     emailVerified: false,
//     phoneNumber: data.phone,
//     password: data.password,
//     displayName: data.name,
//     // photoURL: data.photoUrl,
//     disabled: false
//   })
//     .then(function(userRecord:any) {
//       // See the UserRecord reference doc for the contents of userRecord.
//       console.log("Successfully created new user:", userRecord.uid);
//     })
//     .catch(function(error:any) {
//       throw new functions.https.HttpsError('failed-creation', 'The function must be called ' +
//       'while authenticated.');

//     });
// });
//

// const imageFile = bucket.file('users/'+userRecord.uid+'/photo.'+data.imageFormat);
// console.log('imageFile: ', imageFile);
// const imageBuffer = new Uint8Array(data.photoUrl)
// console.log(imageBuffer);
// imageFile.save(data.photoUrl, {metadata:{contentType:data.imageCodec}}).then((uploadedImage:any)=>{
//   console.log('uploaded photo',uploadedImage);
//   imageFile.getSignedUrl({action:'read',expires: new Date('12/31/5050')}).then((signedUrls:any)=>{
//     console.log('signedUrls',signedUrls);
//     const dbUserRecord:UserData = {
//       access:{access:'guest'},
//       attendanceCount:0,
//       attendanceDate:new Date(),
//       displayName:data.name,
//       email:data.email,
//       emailVerified:false,
//       firstLogin:true,
//       photoURL:signedUrls[0],
//       status:{access:'inactive',isOnline:false},
//       userId:userRecord.uid,
//       phoneNumber:data.phone,
//     }
//     firestore.collection('users').doc(userRecord.uid).set(dbUserRecord).then(()=>{
//       console.log('Successfully created new user:', userRecord.uid);
//       response.status(200).send(userRecord);

//     }).catch((error:any)=>{
//       console.log('Error adding user detail:', error);
//       response.status(400).send(error);
//     });
//   }).catch((error:any)=>{
//     console.log('Error getting user image :', error);
//     response.status(400).send(error);
//   });
// }).catch((error:any)=>{
//   console.log('Error uploading image:', error);
//   response.status(400).send(error);
// })
// 
export type UserData={
  userId:string;
  displayName:string;
  email:string;
  phoneNumber?:string;
  photoURL:string;
  emailVerified:boolean;
  firstLogin:boolean;
  access:UserAccess;
  status:UserStatus;
  attendanceCount:number;
  attendanceDate:any;
}
export type UserStatus = {
  isOnline:boolean;
  access:'active' | 'inactive' | 'blocked' | 'deleted';
}
export type UserAccess={
  access:'admin'|'guest'|'worker'|'supervisor';
}