import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Matchdetails } from './MatchDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='http://localhost:8088/web';


  constructor(private http:HttpClient) { }
  getMatchDetails():Observable<any>
  {
    return this.http.get(this.url.concat("/match"))
  }
  getAllMatches():Observable<any>
{
 return this.http.get(this.url.concat("/match"));
  

  }
  getMatchById(matchId:number):Observable<any>
  {
   return this.http.get(this.url.concat("/match/")+matchId+"");
  }
 
  
  Update(match:Matchdetails):Observable<any>
  {
    return this.http.put(this.url.concat("/match"),match);
  }
  getTeamDetails():Observable<any>{
    return this.http.get(this.url.concat("/teamdetails"))
  }
}


