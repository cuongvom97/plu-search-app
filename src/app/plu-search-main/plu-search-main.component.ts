import { Component, OnInit } from '@angular/core';
import { PluDto } from '../models/plu.model';
import * as plus from '../data/plu.json';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-plu-search-main',
  templateUrl: './plu-search-main.component.html',
  styleUrls: ['./plu-search-main.component.css']
})
export class PluSearchMainComponent implements OnInit {

  coreData: PluDto[] = (plus as any).default;
  searchcontain = new FormControl();
  pluCode = new FormControl();
  pluName = new FormControl();
  listPlu: PluDto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.changeEvent();
    this.listPlu = this.coreData;
  }

  changeEvent() {
    this.searchcontain.valueChanges.subscribe(x => {
      this.search();
    });
  }

  search() {
    this.listPlu = this.coreData.filter(x => x.searchtext.includes(this.searchcontain.value.toUpperCase()));
  }
  
  add() {
    var plucode = this.pluCode.value;
    var pluname = this.pluName.value;
    var searchText = pluname + "_" + plucode;
    var plu = {
      code: plucode,
      name: pluname,
      searchtext: searchText
    } as PluDto;
    this.coreData.push(plu);
    (plus as any).default = this.coreData;
    console.log();
  }
}
