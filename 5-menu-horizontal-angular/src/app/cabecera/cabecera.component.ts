import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  public active : boolean = false 

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}
