import { Component, OnInit} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpService} from "./httpService";
import {Film_short} from "./film";
 
@Component({
    selector: "app-root",
    standalone: true,
    imports: [HttpClientModule, FormsModule],
    template: `<div>
                    @if(film == undefined)
                      {
                      <input  name="title" [(ngModel)] = "title" />
                      <button (click)="ClickButton()"> Нажми меня</button>
                      }
                      @else if (film.Response == "False") {
                        <p>Ошибка в названии</p>
                        <input  name="title" [(ngModel)] = "title" />
                        <button (click)="ClickButton()"> Нажми меня</button>
                      }
                      @else {
                    <p>Имя пользователя: {{film.Title}}</p>
                    <p>Возраст пользователя: {{film.Year}}</p>
                    <p>{{strolka}}</p>
                    }
                    
               </div>`,
    providers: [HttpService]
})
export class AppComponent { 
    
    film:Film_short| undefined;
    title:string = '';   
    strolka:string = 'sss';
    constructor(private httpService: HttpService){}
     ClickButton()
     {
      this.strolka= "https://www.omdbapi.com/?t=" + this.title.toLocaleLowerCase() +"&apikey=6b8a263a";
      this.httpService.getData(this.strolka).subscribe({next:(data:any) => this.film = new Film_short(data.Title, data.Year, data.Response, data.Error)});
    

    }
}