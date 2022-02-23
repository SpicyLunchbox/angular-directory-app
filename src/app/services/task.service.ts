import { Injectable } from '@angular/core';
// http client.  Alternative to fetch or axios
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  // where this service is available for use
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // http client must be passed into constructor of service for use
  constructor(private http: HttpClient) {}

  // Observable used for async data, <Task[]> is a description of what sort of data to expect
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
