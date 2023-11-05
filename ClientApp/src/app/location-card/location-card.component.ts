import { Component, Input } from '@angular/core';
import { MaterialObject, OreLocation } from '../api/models';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input() name: string = ""
  @Input() url: string = ""
  @Input() Orelocations: OreLocation[] = []
  materialsNames: MaterialObject[] = []
  
  ngOnInit(): void {
    console.log(name)
  }
}
