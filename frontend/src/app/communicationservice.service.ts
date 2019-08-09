import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationserviceService {

  private API_URL = 'http://localhost:8080/conf';

  dataLoaded: boolean = false;
  data: any;

  private dataBSubject = new BehaviorSubject<any>(this.data);
  public latestData = this.dataBSubject.asObservable();

  constructor(private http: HttpClient) {}
    
  changeData(newData) {
    this.dataBSubject.next(newData);
  }

  fetchDataFromAPI(): Promise<any> {
    return this.http.get(`${this.API_URL}`)
      .toPromise()
      .then((data) => {
        this.changeData(data);
        this.dataLoaded = true;
        console.log('Data have been fetched from the API');
      })
      .catch((err) => console.log(err));
  }

  async dataPromise(): Promise<any> {
    if(this.dataLoaded){
      console.log('Data is being fetched from the service');
      return this.latestData;
    } else {
      return this.fetchDataFromAPI().then(() => this.latestData);
    }
  }
  
}
