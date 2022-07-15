import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleClass: any;
  opened = false;
  showMenu: any;
  showMbMenu: any = 'hide';
  constructor(private dz: DataService) { }

  ngOnInit(): void {
  }

  toggle(){
    console.log('toggle...', this.opened);

    this.showMbMenu = 'show';
    this.dz.raiseMyDataEvent(this.showMbMenu)
    // this.opened = !this.opened;
    // this.showMenu = this.opened ? 'show' : 'hide';
  }

  hideMenu(){
    console.log('hidemenu...', this.opened);
    this.showMbMenu = 'hide';
    this.dz.raiseMyDataEvent(this.showMbMenu)
  }
}
