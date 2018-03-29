import { Truck } from './truck.model'
import { Subject } from 'rxjs/Subject';

export class TrucksService {
  trucksAdded = new Subject<Truck[]>();
  // startedEditing = new Subject<number>();
  private trucks: Truck[] = [
  ];

  getTrucks() {
    return this.trucks.slice();
  }

  getTruck(index: number) {
    return this.trucks[index];
  }

  addTruck(Truck: Truck) {
    this.trucks.push(Truck);
    this.trucksAdded.next(this.trucks.slice());
  }


  // deleteTruck(index: number) {
  //   this.trucks.splice(index, 1);
  //   this.trucksAdded.next(this.trucks.slice());
  // }

  // deleteTrItem(){
  //   document.getElementsByClassName('tr_items').InnerHTML
  //   var el = document.querySelector("tr_items");
  //   el.innerHtml = '';
  // }

}
