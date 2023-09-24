import { Component, OnInit } from '@angular/core';
import { Battery, FuelChamber, PropelantTank, Radiator, Thruster, Tool, Weapon, Generator } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-ship-calc',
  templateUrl: './ship-calc.component.html',
  styleUrls: ['./ship-calc.component.css']
})
export class ShipCalcComponent implements OnInit {
  thrusters: Thruster[] = []
  weapons: Weapon[] = []
  batteries: Battery[] = []
  fuelChambers: FuelChamber[] = []
  generators: Generator[] = []
  propelantTanks: PropelantTank[] = []
  radiators: Radiator[] = []
  tools: Tool[] = []
  heatProductionSum: number = 0
  heatDispersion: number = 0
  heatTransferFromHeatsink: number = 0
  energyProduction: number = 0
  energyConsumption: number = 0
  propelantMax: number = 0
  thrustSum: number = 0
  batterySum: number = 0
  heatsinkCount: number= 0

  CalcWeapons() {
    this.energyConsumptionCalc()
    this.HeatProduction()
  }
  CalcGenerators() {
    this.HeatProduction()
    this.energyProdCalc()
  }
  CalcChambers() {
    this.HeatProduction()
  }
  CalcThrusters() {
    this.thrustCalc()
    this.propelantConsumtionCalc()
    this.energyConsumptionCalc()
  }
  propelantConsumtionCalc(): void {

  }
  energyConsumptionCalc(): void{
    this.energyConsumption = 0
    const energyConsum : number[] = []
    energyConsum.push(...this.weapons.map(x => x.electricityConsume))
    energyConsum.push(...this.tools.map(x => x.electricityConsume))
    energyConsum.push(...this.thrusters.map(x => x.electricityConsume))
    const energyConsumNames: string[] = [] 
    energyConsumNames.push(...this.weapons.map(x => x.name))
    energyConsumNames.push(...this.tools.map(x => x.name))
    energyConsumNames.push(...this.thrusters.map(x => x.name))
    
    for (let i: number = 0; i < energyConsum.length; i++) {
      const element: HTMLInputElement = document.getElementById(energyConsumNames[i]) as HTMLInputElement
      if (element.value != "")
        this.energyConsumption += energyConsum[i] * Number.parseInt(element.value)
      this.energyConsumption.toFixed(2)
    }
  }
  thrustCalc(): void
  {
    this.thrustSum = 0;
    for (let i: number = 0; i < this.thrusters.length; i++) {
      const element: HTMLInputElement = document.getElementById(this.thrusters[i].name) as HTMLInputElement
      if (element.value != "")
        this.thrustSum += this.thrusters[i].thrustProduction * Number.parseInt(element.value)
    }
  }
  energyProdCalc(): void {
    this.energyProduction = 0;
    for (let i: number = 0; i < this.generators.length; i++)
    {
      const element: HTMLInputElement = document.getElementById(this.generators[i].name) as HTMLInputElement
      if (element.value != "")
      this.energyProduction += this.generators[i].electricityProduction * Number.parseInt(element.value)
    }
  }
  BatteryCalc(): void {
    this.batterySum = 0;
    for (let i: number = 0; i < this.batteries.length; i++) {
      const element: HTMLInputElement = document.getElementById(this.batteries[i].name) as HTMLInputElement
      if (element.value!="")
      this.batterySum += this.batteries[i].elecrticityStorage * Number.parseInt(element.value)
    }
  }
  HeatProduction(): void {
    this.heatProductionSum = 0;
    this.heatsinkCount = 0;
    const heatProducers: number[] = []
    heatProducers.push(...this.weapons.map(x => x.heatProduction))
    heatProducers.push(...this.fuelChambers.map(x => x.heatProduction))
    heatProducers.push(...this.generators.map(x => x.heatProduction))
    const heatDisPassive: number[] = []
    heatDisPassive.push(...this.weapons.map(x => x.heatDispiration))
    heatDisPassive.push(...this.fuelChambers.map(x => x.heatDispiration))
    heatDisPassive.push(...this.generators.map(x => x.heatDispiration))
    const heatProducersNames: string[] = []
    heatProducersNames.push(...this.weapons.map(x => x.name))
    heatProducersNames.push(...this.fuelChambers.map(x => x.name))
    heatProducersNames.push(...this.generators.map(x => x.name))
    for (let i: number = 0; i < heatProducers.length; i++) {
      const element: HTMLInputElement = document.getElementById(heatProducersNames[i]) as HTMLInputElement
      if (element.value != "")
      this.heatProductionSum += (heatProducers[i]-heatDisPassive[i]) * Number.parseInt(element.value)
    }
    this.heatsinkCount = Math.ceil(this.heatProductionSum / 1500)
  }
  PropelantCalc(): void {
    this.propelantMax = 0;
    for (let i: number = 0; i < this.propelantTanks.length; i++) {
      const element: HTMLInputElement = document.getElementById(this.propelantTanks[i].name) as HTMLInputElement
      if (element.value != "")
      this.propelantMax += this.propelantTanks[i].propelantStore * Number.parseInt(element.value)
    }
  
  }
  HeatDispersionCalc(): void {
    this.heatDispersion = 0;
    for (let i: number = 0; i < this.radiators.length; i++) {
      const element: HTMLInputElement = document.getElementById(this.radiators[i].name) as HTMLInputElement
      if (element.value != "")
      this.heatDispersion += this.radiators[i].heatDispiration * Number.parseInt(element.value)
    }
  }
  constructor(private dataService: MainService) {
  }
  ngOnInit(): void
  {
    this.dataService.getThrustersGet$Json().subscribe(x => {
      this.thrusters = x;
    })
    this.dataService.getWeaponsGet$Json().subscribe(x => {
      this.weapons = x;
    })
    this.dataService.getBatteriesGet$Json().subscribe(x => {
      this.batteries = x;
    })
    this.dataService.getFuelChambersGet$Json().subscribe(x => {
      this.fuelChambers = x;
    })
    this.dataService.getGeneratorsGet$Json().subscribe(x => {
      this.generators = x;
    })
    this.dataService.getPropelantTanksGet$Json().subscribe(x => {
      this.propelantTanks = x;
    })
    this.dataService.getRadiatorsGet$Json().subscribe(x => {
      this.radiators = x;
    })
    this.dataService.getToolsGet$Json().subscribe(x => {
      this.tools = x;
    })
  }
}
