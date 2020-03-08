import { Component, OnInit } from '@angular/core';
import {Fruit} from 'src/app/market/fruit'
import {Seasons} from 'src/app/market/fruit'
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  sss:string="all";
 myfruit=[new Fruit("apple","red","src//1",Seasons.allYear),
          new Fruit("apple","green","src//2",Seasons.allYear),
          new Fruit("apple","yellow","src//3",Seasons.allYear),
          new Fruit("banana","yellow","src//4",Seasons.allYear),
          new Fruit("orange","orange","src//5",Seasons.winter),
          new Fruit("paper","green","src//6",Seasons.summer),
          
         ]
        
  constructor() { }

  ngOnInit() {
  }

}


