import { Component } from '@angular/core';
import { MaterialObject, Location } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-resources-map',
  templateUrl: './resources-map.component.html',
  styleUrls: ['./resources-map.component.css']
})
export class ResourcesMapComponent {
  materialsNames: MaterialObject[] = []
  SpaceObjects: Location[] = []
  resultLocations: Location[] = []
  isChoosenOre: boolean[] = []
  isLocation: boolean[] = [false,false]
  constructor(private dataService: MainService) {
    
  }
  onCheckboxOreChange(e: Event) {
    const checkbox = e.target as HTMLInputElement
    this.isChoosenOre[checkbox.id] = checkbox.checked
    console.log(this.isChoosenOre)
    this.resultLocations = []
    if (this.isChoosenOre.filter(x => x == true).length > 0)
      for (let i = 0; i < this.SpaceObjects.length; i++) {
        for (let k = 0; k < this.SpaceObjects[i].oreLocations.length; k++) {
          let a = 0
          for (let j = 0; j < this.isChoosenOre.length; j++) {
            if (this.isLocation[this.SpaceObjects[i].oreLocations[k].locationType])
            if (this.isChoosenOre[j] == (this.SpaceObjects[i].oreLocations[k].ores.find(x => x.material == j) != undefined) && this.isChoosenOre[j] == true) {
              a++;
              if (this.resultLocations.find(x => x.name == this.SpaceObjects[i].name) == undefined && a == this.isChoosenOre.filter(x => x == true).length) {
                this.resultLocations.push(this.SpaceObjects[i])
              }
            }
          }
        }

      }
    else {
      this.resultLocations = this.SpaceObjects
    }
    console.log(this.resultLocations)
  }
  OnCheckboxLocationChange(e: Event, i: number) {
    const checkbox = e.target as HTMLInputElement
    this.isLocation[i] = checkbox.checked
    console.log(this.isLocation)
    
  }
  ngOnInit(): void {
    this.dataService.getMaterialsNamesGet$Json().subscribe(x => {
      console.log(x);
      this.materialsNames = x;
      this.isChoosenOre = new Array<boolean>(x.length).fill(false)

    });
    this.dataService.getOreLocationsGet$Json().subscribe(x => {
      this.SpaceObjects = x
      this.resultLocations = this.SpaceObjects
    })
  }
}
