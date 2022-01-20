import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
cred = credentials.Certificate('firebase-sdk(2).json')
firebase_admin.initialize_app(cred)
db = firestore.client()
for doc in db.collection('SIT_COL').stream():
    print('{} => {} '.format(doc.id, doc.to_dict()))

# config = {
#     'apiKey': "AIzaSyCr3OU4kqHPIJwM3yy0kB-hcOWhtk5cD3I",
#     'authDomain': "sit-manager.firebaseapp.com",
#     'projectId': "sit-manager",
#     'storageBucket': "sit-manager.appspot.com",
#     'messagingSenderId': "690627613189",
#     'appId': "1:690627613189:web:6824650edf61bf8341826c",
#     'measurementId': "G-7E3E6R0KLW"
# }
# configwitData = {
#     'apiKey': "AIzaSyBAC1YCblSXBEyH1p2J_0bc5veMrgNy5Mo",
#     'authDomain': "stock-in-transit.firebaseapp.com",
#     'projectId': "stock-in-transit",
#     'storageBucket': "stock-in-transit.appspot.com",
#     'messagingSenderId': "1040794518073",
#     'appId': "1:1040794518073:web:cb9905401e60df30a2c3e8",
#     'measurementId': "G-T9PFREX074"
# }
# noDataFirebase = Firebase(config)
# dataFirebase = Firebase(configwitData)


