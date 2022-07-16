import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuton-lab';

  onActivate() {//hack to scroll to top on route change(page load)
    window.scroll(0,0);
  }
}


