import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pogress',
  templateUrl: './pogress.component.html',
  styles: []
})
export class PogressComponent implements OnInit {
  progreso1:number=20;
  progreso2:number=30;

  constructor() {}
  
  ngOnInit() {
  }
 
}
