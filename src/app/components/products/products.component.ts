import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private prodServ: ProductService) {}

  ngOnInit() {
    this.prodServ.getAllProducts().subscribe((data) => {
      console.log(data);
    });
  }
}
