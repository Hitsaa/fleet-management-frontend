import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  opened = true;
  id:any | null;
  value:any;
  ngOnInit(): void {
  }
  to_explore(id:any){
    if(this.id != id){
      this.id = id;
    }
    else{
      this.id=null;
    }
  }
}
