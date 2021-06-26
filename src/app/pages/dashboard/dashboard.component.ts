import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public objects:any[]=[];
  private todaydate:Date=null;
  private totaldays:number=6;
  constructor(private api:ApiService,private datePipe: DatePipe,private router: Router) {
    this.todaydate=new Date();
   }

  async ngOnInit(){
    await this.getData();
  }

  private async getData(){
    for(let i=1;i<=this.totaldays;i++){
      let date:string=this.datePipe.transform(this.todaydate,"yyyy-MM-dd");
      try {
        let obj=await this.api.getModel(date);
        this.objects.push(obj);
      } catch (error) {
        console.log(error);
      }
    
      this.todaydate=this.DissOrAddDate(this.todaydate,-1);
    }
  }

  /**
   * Devuelve una fecha con un número de días añadido o quitado
   * @param date Fecha a editar
   * @param numdias número de días a restar o a sumar
   */
  private DissOrAddDate(date:Date,numdias:number):Date{
    date.setDate(date.getDate()+numdias);
    return date;
  }

  public goDetails(obj:any){
    this.router.navigate(['details'],{state:{ob:obj}});
  }

}
