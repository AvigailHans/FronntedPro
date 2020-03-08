import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/jokes.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
serch:string="";
  constructor(public myJokes:JokesService) { }

  ngOnInit() {
    
  }

}
