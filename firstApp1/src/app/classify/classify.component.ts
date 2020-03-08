import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  name: string;
  constructor(public ARS: ActivatedRoute, public router: Router) {
    debugger;
    this.name = "";
    //ars.params.studentName;
    ARS.params.subscribe((args) => {
      this.name = args.name;
    });

  }
  ngOnInit() {
  }

}
