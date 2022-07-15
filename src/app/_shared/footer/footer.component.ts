import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emittedData$: any;
  constructor(private dz: DataService) {

  }

  ngOnInit(): void {
    this.emittedData$ = this.dz.getMyData();
    // this.dz.myData$.subscribe({
    //   next: (val) => {
    //     console.log(val);
    //   },
    //   error: (e) => console.error(e),
    //   complete: ()=> console.info('completed')

    // });
  }

}
