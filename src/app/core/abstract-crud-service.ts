import { PlatformLocation } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { Alert } from "../common/alert";

export interface AbstractCrudServiceInterface <T>{
    getData(): Observable<T>
}


export abstract class AbstractCrudService<T> implements AbstractCrudServiceInterface {

    
  
    data$ = new ReplaySubject<T>(1);
    endpoint: string;

    constructor(private http: HttpClient, private platformLocation: PlatformLocation, 
         endpoint: string
    ){
       
        this.endpoint = endpoint;
        this.loadData();

    }
    loadData() {
        throw new Error("Method not implemented.");
    }

    getData(): Observable<T>{
        return this.data$.asObservable();
    }
}