import { Component, OnInit } from '@angular/core';
import { quantity } from './../quantity_interface';
import { quantities } from './../quantities';

@Component({
  selector: 'app-converters',
  templateUrl: './converters.component.html',
  styleUrls: ['./converters.component.css']
})
export class ConvertersComponent implements OnInit {

  quantities : quantity[] = quantities

  numberOriginalChanged(i:number,numberInput:number){ 
    quantities[i].currentNumberFrom = numberInput
  }

  unitCalculation(i:number){
    if ((quantities[i].currentNumberFrom == null) ||
      (quantities[i].currentUnitFrom == null) ||
      (quantities[i].currentUnitTo == null)){  
      return ""
    }

    let unitFromIndex : number = quantities[i].units.indexOf(quantities[i].currentUnitFrom!)
    let unitToIndex : number = quantities[i].units.indexOf(quantities[i].currentUnitTo!)
  
    let unitFromMultiplier : number = quantities[i].unitsMultiplier[unitFromIndex]
    let unitToMultiplier : number = quantities[i].unitsMultiplier[unitToIndex]
  
    quantities[i].result = quantities[i].currentNumberFrom! * unitFromMultiplier / unitToMultiplier

    return quantities[i].result?.toString().slice(0,15)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
