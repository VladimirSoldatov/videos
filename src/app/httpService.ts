import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(response:string){
        return this.http.get(response)
    }
}