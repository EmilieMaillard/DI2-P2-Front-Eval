import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import {error} from "@angular/compiler-cli/src/transformers/util";



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  events: Event[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.ListEvent();
  }

  ListEvent() {
    this.eventService
      .getEvents()
      .subscribe({
        next: (data: any) => {
          this.events = data.event;
        },
        error: () => {
          console.error('There was an error!', error);
        },
      });
  }


}
