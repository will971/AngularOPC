import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  
  appareils:any[];
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  ngOnInit(){
    this.appareils=this.appareilService.appareils;
  }
     
  constructor(private appareilService:AppareilService){ }

  onAllumer(){
   this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
   }

}
