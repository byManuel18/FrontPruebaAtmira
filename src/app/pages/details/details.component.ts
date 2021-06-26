import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  public obj:any=null;

  constructor(private router:Router) { 
    this.obj=this.router.getCurrentNavigation().extras.state.ob;
  }

  ngOnInit(){
    
  }

  public goBack(){
    this.router.navigate(['dashboard']);
  }
}
