import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


import { TrucksService } from '../trucks.service';
import {Truck} from "../truck.model";

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.css']
})
export class TruckEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private TrucksService: TrucksService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTruck = new Truck(value.callcontroll, 
                               value.readtruck, 
                               value.autocall, 
                               value.truck, 
                               value.origin, 
                               value.destination, 
                               value.pickup, 
                               value.dho, 
                               value.dhd, 
                               value.fp, 
                               value.lengthitem, 
                               value.weight,
                               value.trip,
                               value.alarm,
                               value.actions 
    );

      this.TrucksService.addTruck(newTruck);
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
