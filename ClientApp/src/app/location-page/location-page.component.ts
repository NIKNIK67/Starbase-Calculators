import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialsNamesDto, Location } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent {
  materialsNames: MaterialsNamesDto[]
  currentLocation: Location
  name: string = ""
  rarites: string[] = ["Common","Uncommon","Rare"]
  constructor(private activateRoute: ActivatedRoute, private dataService: MainService) {
    this.name = activateRoute.snapshot.params['name']
  }
  ngOnInit(): void {
    this.dataService.getMaterialsNamesGet$Json().subscribe(x => {
      console.log(x);
      this.materialsNames = x;
    });
    this.dataService.getOreLocationsGet$Json().subscribe(x => {
      this.currentLocation = x.filter(x => x.name == this.name)[0]
    })
  }
}
