import { Component, OnInit } from '@angular/core';
import { ItemOutputDto, MaterialsNamesDto } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-capital-calc',
  templateUrl: './capital-calc.component.html',
  styleUrls: ['./capital-calc.component.css']
})
export class CapitalCalcComponent implements OnInit {
  items: ItemOutputDto[] = []
  materialsNames: MaterialsNamesDto[] = []
  partsSum: Array<number> = new Array<number>(34)
  constructor(private dataService: MainService) {

  }

  ngOnInit(): void {
    
    this.dataService.getCapitalItemsGet$Json().subscribe(x => {
      console.log(x);
      this.items = x;
    });
    this.dataService.getMaterialsNamesGet$Json().subscribe(x => {
      console.log(x);
      this.partsSum.push(x.length);
      this.partsSum.fill(0);
      this.materialsNames = x;
    });
  }
  calcParts()
  {
    for (let i = 0; i < this.partsSum.length; i++) {
      this.partsSum[i] = 0;
    }
    let element: HTMLInputElement[] = []
    for (let i = this.items[0].id; i < this.items[this.items.length - 1].id + 1; i++)
    {
      element.push(document.getElementById(i.toString()) as HTMLInputElement);
    }
    for (let i = this.items[0].id; i < this.items[this.items.length - 1].id+1; i++) {
      if (Number(element.filter(x => Number(x.id) === i)[0]?.value ?? 0) !== 0)
      for (let j = 0; j < this.partsSum.length; j++)
      {
        let matAmount:number = this.items.filter((x) => x.id === i)[0].compositions.filter(x => x.material === j)[0]?.amount || 0
        let times: number = Number(element.filter(x => Number(x.id) === i)[0]?.value ?? 0)
        this.partsSum[j] += Math.ceil((matAmount * times) / 1728)
      }
    }
  }
}

