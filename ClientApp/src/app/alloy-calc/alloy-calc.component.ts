import { Component, OnInit } from '@angular/core';
import { Item, MaterialObject } from '../api/models';
import { MainService } from '../api/services';

@Component({
  selector: 'app-alloy-calc',
  templateUrl: './alloy-calc.component.html',
  styleUrls: ['./alloy-calc.component.css']
})
export class AlloyCalcComponent implements OnInit {
  materialsNames: MaterialObject[] = []
  items: Item[]=[]
  partsSum: Array<number> = new Array<number>(34).fill(0)
  constructor (private dataService: MainService)
  {
  }
  ngOnInit(): void
  {
    this.dataService.getAlloyItemsGet$Json().subscribe(x => {
      console.log(x);
      this.items = x;
    });
    this.dataService.getMaterialsNamesGet$Json().subscribe(x => {
      console.log(x);
      this.materialsNames = x;
    });
  }
  calcParts() {
    for (let i = 0; i < this.partsSum.length; i++) {
      this.partsSum[i] = 0;
    }
    const element: HTMLInputElement[] = []
    for (let i = this.items[0].id; i < this.items[this.items.length - 1].id + 1; i++) {
      element.push(document.getElementById(i.toString()) as HTMLInputElement);
    }
    for (let i = this.items[0].id; i < this.items[this.items.length - 1].id + 1; i++) {
      if (Number(element.filter(x => Number(x.id) === i)[0]?.value ?? 0) !== 0)
        for (let j = 0; j < this.partsSum.length; j++) {
          const matAmount: number = this.items.filter((x) => x.id === i)[0].compositions.filter(x => x.material === j)[0]?.amount || 0
          const times: number = Number(element.filter(x => Number(x.id) === i)[0]?.value ?? 0)
          this.partsSum[j] += (matAmount * times) / 1728
        }
    }
    for (let j = 0; j < this.partsSum.length; j++)
      this.partsSum[j] = Math.ceil(this.partsSum[j]);
  }

}
