import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  APP_ID='7c948155';
  API_KEY='6ffb48b92e25b765922917d55c033992';
apiurl='https://api.edamam.com/search?q=chips&app_id=7c948155&app_key=6ffb48b92e25b765922917d55c033992&calories=591-722&health=alcohol-free';

recieved :any ;
  
  constructor(public http: HttpClient) { }



 search(name:any){
  this.recieved = name;
 return this.http.get('https://api.edamam.com/search?q='+name+'&app_id=7c948155&app_key=6ffb48b92e25b765922917d55c033992&calories=591-722&health=alcohol-free')

 }


 display()
 {
  return this.http.get('https://api.edamam.com/search?q='+this.recieved+'&app_id=7c948155&app_key=6ffb48b92e25b765922917d55c033992&calories=591-722&health=alcohol-free')
 }


}
