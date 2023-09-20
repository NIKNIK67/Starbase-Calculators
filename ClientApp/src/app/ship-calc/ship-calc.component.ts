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
