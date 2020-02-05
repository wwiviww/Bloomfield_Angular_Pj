import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './product.service';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
   
})


export class ProductListComponent implements OnInit {
  
   showImage: boolean = false; 
   imageUrl: string;
   productName: string;
   imageWidth: number = 50 ;
   imageMargin: number = 2 ; 
   filteredBy: string = '';
   filteredProducts: IProduct[] = [];
   products: any[] = [];
   errorMessage: string;

   pageTitle: string ='Product List';
   userName: string ='';
   
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private productService: ProductService){ }

  userLogin(): void {
    this.userName = this.userName + " not success";
  }
  onNotify(message: string) {
    alert(message);   
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {this.products = products
                   this.filteredProducts = products
      }, error => {
        
       this.errorMessage = <any>error }
    );
  }
}