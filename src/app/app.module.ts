import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { RelatedProductsFirstComponent } from './related-products/related-products-first/related-products-first.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component';
import { ReverseStr } from './shared/reverse-string.pipe';
import { EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductModule } from './products/product.module';
import { ProductDetailGuard } from './products/product-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ]),
    ProductModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
