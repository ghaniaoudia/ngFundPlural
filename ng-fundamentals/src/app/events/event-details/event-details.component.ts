import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
    templateUrl:'./event-details.component.html',
    styleUrls:['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
    event: IEvent
    constructor(private eventService: EventService,
        private activatedRoute: ActivatedRoute){}
    ngOnInit(){        
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])    }
}