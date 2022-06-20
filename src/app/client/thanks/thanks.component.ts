import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/server/data.service';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  categories:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getcateg();
  }
  getcateg(){

    this.dataService.getcatega().subscribe(res=>{
    //  console.log(res);
      this.categories=res;
      console.log(this.categories);
    })
}}
