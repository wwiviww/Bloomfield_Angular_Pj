import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
, })
export class ProductDetailComponent implements OnInit {
  pageTitle : string = 'Product Detail';
  product : IProduct;
  errorMessage: string = '';
  imageWidth: number = 200 ;
  imageMargin: number = 4 ; 
  
  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) {

   }

 
  getProduct(id: number){
    this.productService.getProduct(id).subscribe(
      resultproduct => this.product = resultproduct,
      error => this.errorMessage = error
    );
  }
  

  ngOnInit() {   
    let id = +this.route.snapshot.paramMap.get('id'); 
    
    if(id){
      this.getProduct(id);
    }
  }
  
  onBack(): void {
    this.router.navigate(['/products']);
  }
    

}


