import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let slug = params.get('slug');
      this.getData(slug);
    });
  }

  getData(slug: any){
    this.ds.getPost(slug).subscribe((res)=>{
      console.log(res);
      this.product = res;
    })
  }

}
