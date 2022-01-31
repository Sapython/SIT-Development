import firebase_admin
from firebase_admin import firestore, credentials, storage
from firebase import firebase
import csv
cred = credentials.Certificate("sit-manager-firebase-adminsdk-weqzc-8c029074a0.json")
firebase_admin.initialize_app(cred)
fs = firestore.client()
allSits = []

def clarifyStatus(status):
    print(status)
    recievedStatus = ['recived','recved','recivd','recevid']
    pendingStatus = ['pendeng','pending','pinding','pindeng','pindng','not recived','not recevid','not receved','not recivid','not recived']
    unloadedStatus = ['unloaded','unloadd','unload','unloaed','unloaed']
    if (recievedStatus.count(status.strip().lower()) > 0):
        return 'recieved'
    elif (pendingStatus.count(status.strip().lower()) > 0):
        return 'pending'
    elif (unloadedStatus.count(status.strip().lower()) > 0):
        return 'unloaded'
    else:
        raise Exception('Status not found')

with open('sit.csv') as sitFile:
    reader = csv.reader(sitFile)
    sit = []
    status:str = ''
    supplyPlantName:str = ''
    supplPlantCode: str = ''
    headerIgnored = False
    for row in reader:
        if not headerIgnored:
            headerIgnored = True
            continue
        if(row[0]!='' and row[0]!=None and row[0]!=' '):
            # print(row)
            if(row[15]!='' and row[15]!=None and row[15]!=' '):
                status = clarifyStatus(row[15])
                supplPlantCode = row[1]
                supplyPlantName = row[2]
            product = {
                'recievePlantName': row[0],
                'supplyPlantCode': row[1],
                'supplyPlantName': row[2],
                'dispatchDate': row[3],
                'expectedDelivery': row[4],
                'deliveryCode': row[5],
                'productCode': row[6],
                'productName': row[7],
                'quantity': row[8],
                'vehicleNo': row[9],
                'transporterName': row[10],
                'gateEntryNumber': row[11],
                'gateEntryDate': row[12],
                'mfgLocation': row[13],
                'storageLocation': row[14],
            }
            sit.append(product)
        else:
            if len(sit)>0:
                allSits.append(sit)
                docRef = fs.collection('stocks').document()
                data = {
                    'status': status,
                    'supplierName':supplyPlantName,
                    'supplierCode':supplPlantCode,
                    'sit':sit,
                    'uploadTime':firestore.SERVER_TIMESTAMP,
                }
                print(data)
                docRef.set(data)
                docRef.update({'id':docRef.id})
                sit = []
    print(allSits)


