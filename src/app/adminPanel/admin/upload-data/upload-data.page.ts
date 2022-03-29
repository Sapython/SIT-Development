import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.page.html',
  styleUrls: ['./upload-data.page.scss'],
})
export class UploadDataPage implements OnInit {
  valid = false;
  datalist: any;
  headerList: any = [];
  arrayBuffer: any;
  file: any;
  allSits:any[] = [];
  constructor(private databaseService:DatabaseService) {}
  clarifyStatus(status: string) {
    const recievedStatus = ['recived', 'recved', 'recivd', 'recevid'];
    const pendingStatus = [
      'pendeng',
      'pending',
      'pinding',
      'pindeng',
      'pindng',
      'not recived',
      'not recevid',
      'not receved',
      'not recivid',
      'not recived',
    ];
    const unloadedStatus = [
      'unloaded',
      'unloadd',
      'unload',
      'unloaed',
      'unloaed',
    ];
    if (recievedStatus.includes(status.toLowerCase())) {
      return 'recieved';
    } else if (pendingStatus.includes(status.toLowerCase())) {
      return 'pending';
    } else if (unloadedStatus.includes(status.toLowerCase())) {
      return 'unloaded';
    } else {
      return 'pending';
    }
  }
  setFile(event) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.datalist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      // this.datalist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      if (this.datalist.length > 0) {
        let sits = [];
        let status = '';
        let supplyPlantCode = '';
        let supplyPlantName = '';
        console.log(this.datalist);
        this.datalist.forEach((element: any) => {
          if (element['SUPP.PLANT']) {
            if (element['Remarkes']) {
              status = this.clarifyStatus(element['Remarkes']);
              supplyPlantCode = element['SUPP.PLANT'];
              supplyPlantName = element['SUPP.PLANT DESC'];
              console.log('Set Status', status);
            }
            sits.push({
              recievePlantName: element['REC.PLANT DESC'] || '',
              supplyPlantCode: element['SUPP.PLANT'] || '',
              supplyPlantName: element['SUPP.PLANT DESC'] || '',
              dispatchDate: element['DISPATCH DATE'] || '',
              expectedDelivery: element['EXPT.DELIVERY'] || '',
              deliveryCode: element['DELIVERY'] || '',
              productCode: element['PRODUCT CODE'] || '',
              productName: element['PRODUCT NAME'] || '',
              quantity: element['QTY'] || '',
              vehicleNo: element['VEHICLE.NO'] || '',
              transporterName: element['TRANS.NAME'] || '',
              gateEntryNumber: element['Gate Entry Number'] || '',
              gateEntryDate: element['Gate Entry Date'] || '',
              mfgLocation: element['MFG LOCATION'] || '',
              storageLocation: element['Storage Location'] || '',
            });
          } else {
            if (sits.length > 0) {
              this.allSits.push({
                status: status || 'pending',
                supplierName: supplyPlantName || '',
                supplierCode: supplyPlantCode || '',
                sit: sits,
                uploadTime: new Date(),
              });
              this.valid = true;
              sits = [];
            }
          }
        });
      } else {
        alert('No data found in file');
      }
    };
  }
  ngOnInit() {}
  uploadData() {
    // console.log(this.uploadForm);
    let count = 1;
    if(confirm('Are you sure you want to upload data?') && false){
      this.allSits.forEach((element:any)=>{
        console.log(element);
        this.databaseService.addSit(element).then(()=>{
          count++;
        }).catch((err)=>{
          console.log(err);
        })
        if (count === this.allSits.length) {
          alert('Uploaded Successfully');
        }
      })
    }
  }
}
