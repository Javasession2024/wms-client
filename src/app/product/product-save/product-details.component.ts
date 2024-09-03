import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product = new Product();

  constructor(private router : Router,
    private productservice : ProductService) { }

  ngOnInit(): void {
    
  }

  saveProduct(product : Object) {
    this.productservice.saveProduct(this.product).subscribe(data => console.log(data), error => console.log(error));
  }
}
