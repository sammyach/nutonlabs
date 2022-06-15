import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    console.log('toggle...', this.opened);

    this.showMbMenu = 'show';
    // this.opened = !this.opened;
    // this.showMenu = this.opened ? 'show' : 'hide';
  }

  hideMenu(){
    this.showMbMenu = 'hide';
  }
}
