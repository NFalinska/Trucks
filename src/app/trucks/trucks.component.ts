import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Truck } from './truck.model'
import {TrucksService} from './trucks.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit, OnDestroy {
  trucks: Truck[];
  private subscription: Subscription;

  constructor(private TrucksService: TrucksService) { }

  ngOnInit() {
    this.trucks = this.TrucksService.getTrucks();
    this.subscription = this.TrucksService.trucksAdded
      .subscribe(
        (trucks: Truck[]) => {
          this.trucks = trucks;
        }
      );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
