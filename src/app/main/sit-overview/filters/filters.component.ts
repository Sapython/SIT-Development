import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filtersSettings:FilterSettings = {} ;
  constructor(private modalController:ModalController) { }
  filtersSettingsForm: FormGroup = new FormGroup({
    sortBy: new FormControl(this.filtersSettings.sortBy,[Validators.required]),
    intensity: new FormControl(this.filtersSettings.intensity,[Validators.required]),
    caseSensitive: new FormControl(this.filtersSettings.caseSensitive,[Validators.required]),
    matchCharLength: new FormControl(this.filtersSettings.matchCharLength,[Validators.required]),
    sort: new FormControl(this.filtersSettings.sort,[Validators.required]),
  })
  ngOnInit() {
    console.log(this.filtersSettings);
  }
  pinFormatter(value: number) { 
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 1 }).format(value);
    // value = Math.floor(value);
    // return `${value}%`;
  }
  emit(){
    Object.keys(this.filtersSettingsForm.value).forEach(key => {
      if(this.filtersSettingsForm.value[key]==null || this.filtersSettingsForm.value[key]==undefined){
        this.filtersSettingsForm.value[key] = this.filtersSettings[key];
      }
    });
    this.modalController.dismiss(this.filtersSettingsForm.value);
    console.log(this.filtersSettingsForm.value);
  }
}

export type FilterSettings = {
  sortBy?: string,
  intensity?: number,
  caseSensitive?: boolean,
  matchCharLength?: number,
  sort?: boolean,
}