import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/events`);
  }

  getEventById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/events/${id}`);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/events`, event);
  }

  updateEvent(event: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/events/${event.id}`, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/events/${id}`);
  }


}
