import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
mjoke:string;
  constructor(public myJokes:JokesService) { }

  ngOnInit() {
   
    this.giveajoke();
  }
  giveajoke(){this.mjoke=this.myJokes.getJOke();}

}
