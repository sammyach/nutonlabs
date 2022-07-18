import { AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, HostListener, NgZone, OnInit, Renderer2 } from '@angular/core';
import * as data from './../data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit, DoCheck {

  childElements!: NodeListOf<Element>;
  products: any = (data as any).default;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private ngZone: NgZone) {
  }

  ngOnInit(): void {

    // this.ngZone.runOutsideAngular(()=>{
    //   this.onWindowScroll();
    // })

    // console.log('home => ',this.products);
    // this.wz.scrollY$.subscribe(r => {
    //   // console.log('zcroll level', (r - this.getScrollHeight()));

    // })
  }

  ngAfterViewInit(): void {
    this.childElements = (<HTMLElement>this.elementRef.nativeElement).querySelectorAll('.title');
  }

  ngDoCheck(): void {
    console.log('checking changez');


  }

  @HostListener('window:scroll')
  onWindowScroll(){
    // console.log('zcroll', $event);
    // this.wz.updateScrollY(this.getYPosition($event))


    if(this.childElements?.length > 0){
      for(let i=0; i<this.childElements.length; i++){
        const windowHeight = window.innerHeight;// height of the viewport.
        const elementTop = this.childElements.item(i).getBoundingClientRect().top;// distance from the top of the viewport
        // const elementVisible = 650;

        if(elementTop < windowHeight){
          this.renderer.addClass(this.childElements.item(i), 'reveal')
        }else{
          this.renderer.removeClass(this.childElements.item(i), 'reveal')
        }
      }
    }
  }

  // getYPosition(e: Event){
  //   // console.log('xxx => ',(e?.target as Element)?.scrollTop);

  //   return (e?.target as Element)?.scrollTop;
  // }

  // getScrollHeight(): number{
  //   return Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  // }

}
